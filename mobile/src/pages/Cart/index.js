/* eslint-disable import/no-named-as-default */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

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

export default function Cart({ navigation }) {
  const total = useSelector((state) =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: product.price * product.amount,
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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

              <ProductDelete
                onPress={() => dispatch(CartActions.removeFromCart(product.id))}
              >
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
