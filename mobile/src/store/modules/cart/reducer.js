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
        /**
         * Verifica se possui algum produdo com id igual a da action.id
         */
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          /**
           * spice: usado para remover o produto
           * productIndex: achar o indice do produto
           * 1: significa que deve remover apenas 1 produto
           */
          draft.splice(productIndex, 1);
        }
      });
    /**
     * Atualiza a quantidade do produto
     */
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
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
