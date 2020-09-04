import produce from 'immer';

export default function cart(state = [], action) {
  /**
   * - Em todo reducer é criado um switch
   */
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      /**
       * a função produce recebe state que é o estado anterior, logo em seguida recebe
       * a função draft(rascunho do estado) onde é feito as alterações, e depois as novas
       * informações são gravadas no estado principal.
       *
       * obs: o modo como o immer trabalha não fere o conceito de imutabilidade.
       */
      return produce(state, (draft) => {
        /**
         * pegando o product da action por desestruturação
         */
        const { product } = action;

        /**
         * adicionando novo produto no estado
         */
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
