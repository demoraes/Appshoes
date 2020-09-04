import { combineReducers } from 'redux';

import cart from './cart/reducer';

/**
 * Cada um dos reducers cadastrados aqui, pode ser acessado pelo state dos components
 */

export default combineReducers({
  cart,
});
