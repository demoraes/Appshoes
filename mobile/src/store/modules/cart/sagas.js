import { Alert } from 'react-native';
import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess, updateAmountSucces } from './actions';

function* addToCart({ id }) {
  /**
   * Busca informações de dentro do estado
   */
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );
  // chamada api, quantidade em estoque
  const stock = yield call(api.get, `/stock/${id}`);

  // colocando a quantidade em estoque na variavel stockAmount
  const stockAmount = stock.data.amount;
  // se o produto já existir pega o valor do amount do respectivo produto, se não adiciona zero
  const currentAmount = productExists ? productExists.amount : 0;
  // adicionando uma unicade no amount do produto
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    /**
     * Se o produto existir, adiciona mais unidade no amount
     */

    yield put(updateAmountSucces(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };
    /**
     * Função put: dispara actions no redux
     */
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSucces(id, amount));
}

/**
 * Quando o usuário adiciona o produto a action @cart/ADD_REQUEST é ouvida pelo
 * redux saga, que depois disso dispara a action addToCartSuccess que por usa vez
 * é ouvida pelo reducer, por fim fazendo a operação.
 *
 * obs: redux-saga tambem é capaz de disparar actions.
 */

/**
 * takeLatest: cadastra outro produto apenas se a chamada api anterior estiver
 * finalizada
 */
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
