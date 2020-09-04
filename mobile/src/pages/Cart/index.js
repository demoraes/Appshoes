/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import Product from '../../components/styles/Product';
import {
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  TextButton,
  ProductAmount,
  ProductControll,
  ProductDetails,
  ProductInfo,
  ProductDelete,
  ProductControllButton,
  ProductSubTotal,
  ProductTotal,
  TotalNumber,
  TotalText,
  Products,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmount, navigation }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Product style={{ maxWidth: 500, maxHeight: 500, margin: 20 }}>
      <ScrollView alwaysBounceVertical>
        {cart.map((product) => (
          <Products key={product.id}>
            <ProductInfo>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductDetails>
              <ProductDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" size={24} color="#11275f" />
              </ProductDelete>
            </ProductInfo>

            <ProductControll>
              <ProductControllButton onPress={() => decrement(product)}>
                <Icon name="remove-circle-outline" size={20} color="#11275f" />
              </ProductControllButton>
              <ProductAmount>{product.amount}</ProductAmount>
              <ProductControllButton onPress={() => increment(product)}>
                <Icon name="add-circle-outline" size={20} color="#11275f" />
              </ProductControllButton>
              <ProductSubTotal>{product.subtotal}</ProductSubTotal>
            </ProductControll>
          </Products>
        ))}

        <ProductTotal>
          <TotalText>TOTAL</TotalText>
          <TotalNumber>{total}</TotalNumber>
          <ProductButton>
            <TextButton>FINALIZAR PEDIDO</TextButton>
          </ProductButton>
        </ProductTotal>
      </ScrollView>
    </Product>
  );
}

/**
 * Pega informações do estado e mapeia em formato de propriedades para o component
 */
const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
