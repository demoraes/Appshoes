import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Text } from 'react-native';

import api from '../../services/api';

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

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await api.get('/stock');

      const data = response.data.map((product) => ({
        ...product,
      }));

      console.tron.log(data);

      this.setState({ products: data });
    } catch (error) {
      console.tron.error(error);
    }
  };

  render() {
    const { products } = this.state;

    return (
      <>
        <Container>
          <ProductImage
            source={{
              uri:
                'https://noticiasdemogi.com.br/wp-content/uploads/2020/08/bolsonaro.jpg',
            }}
          />
          <ProductTitle>DWD</ProductTitle>
          <ProductPrice>R$ 38,00</ProductPrice>
          <Button>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={15} />
              <ProductAmountText>3</ProductAmountText>
            </ProductAmount>
            <TextButton>ADICIONAR AO CARRINHO</TextButton>
          </Button>
        </Container>
      </>
    );
  }
}

export default Home;
