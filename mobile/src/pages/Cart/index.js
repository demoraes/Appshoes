/* eslint-disable react/prop-types */
import React from 'react';
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
} from './styles';

export default function Cart({ navigation, route }) {
  const { products } = route.params;
  return (
    <Product style={{ maxWidth: 500, margin: 20 }}>
      <ProductInfo>
        <ProductImage
          source={{
            uri: products.image,
          }}
        />
        <ProductDetails>
          <ProductTitle>{products.title}</ProductTitle>
          <ProductPrice>{products.price}</ProductPrice>
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

      <ProductTotal>
        <TotalText>TOTAL</TotalText>
        <TotalNumber>R$ 888,00</TotalNumber>
        <ProductButton>
          <TextButton>FINALIZAR PEDIDO</TextButton>
        </ProductButton>
      </ProductTotal>
    </Product>
  );
}
