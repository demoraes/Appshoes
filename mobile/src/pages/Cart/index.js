/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView } from 'react-native';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

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

function Cart({ cart, navigation }) {
  return (
    <Product style={{ maxWidth: 500, maxHeight: 500, margin: 20 }}>
      <ScrollView alwaysBounceVertical>
        {cart.map((product) => (
          <Products>
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
              <ProductDelete>
                <Icon name="delete-forever" size={24} color="#11275f" />
              </ProductDelete>
            </ProductInfo>

            <ProductControll>
              <ProductControllButton>
                <Icon name="remove-circle-outline" size={20} color="#11275f" />
              </ProductControllButton>
              <ProductAmount value="2" />
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

export default connect(mapStateToProps)(Cart);
