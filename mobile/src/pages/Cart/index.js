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

function Cart({ cart, removeFromCart, navigation }) {
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
              <ProductControllButton>
                <Icon name="remove-circle-outline" size={20} color="#11275f" />
              </ProductControllButton>
              <ProductAmount>{product.amount}</ProductAmount>
              <ProductControllButton>
                <Icon name="add-circle-outline" size={20} color="#11275f" />
              </ProductControllButton>
              <ProductSubTotal>123</ProductSubTotal>
            </ProductControll>
          </Products>
        ))}

        <ProductTotal>
          <TotalText>TOTAL</TotalText>
          <TotalNumber>R$ 888,00</TotalNumber>
          <ProductButton>
            <TextButton>FINALIZAR PEDIDO</TextButton>
          </ProductButton>
        </ProductTotal>
      </ScrollView>
    </Product>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
