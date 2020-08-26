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

export default function Cart({ navigation }) {
  return (
    <Product style={{ maxWidth: 500, margin: 20 }}>
      <ProductInfo>
        <ProductImage
          source={{
            uri:
              'https://ichef.bbci.co.uk/news/410/cpsprodpb/3CC7/production/_112395551_eso2008a.jpg',
          }}
        />
        <ProductDetails>
          <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
          <ProductPrice>R$ 22,00</ProductPrice>
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
        <ProductSubTotal>R$ 444,00</ProductSubTotal>
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
