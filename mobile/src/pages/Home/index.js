import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Text } from 'react-native';

import {
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Button,
  TextButton,
  ProductAmount,
  ProductAmountText,
} from './styles';

export default function Home() {
  return (
    <Container>
      <ProductImage
        source={{
          uri:
            'https://noticiasdemogi.com.br/wp-content/uploads/2020/08/bolsonaro.jpg',
        }}
      />
      <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
      <ProductPrice>R$ 38,00</ProductPrice>
      <Button>
        <ProductAmount>
          <Icon name="add-shopping-cart" color="#FFF" size={15} />
          <ProductAmountText>3</ProductAmountText>
        </ProductAmount>
        <TextButton>ADICIONAR AO CARRINHO</TextButton>
      </Button>
    </Container>
  );
}
