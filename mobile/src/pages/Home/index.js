import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';

import api from '../../services/api';

import Product from '../../components/styles/Product';

import {
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
      const response = await api.get('/products');

      const data = response.data.map((product) => ({
        ...product,
      }));

      this.setState({ products: data });
    } catch (error) {
      console.tron.error(error);
    }
  };

  renderProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <Button>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={15} />
            <ProductAmountText>3</ProductAmountText>
          </ProductAmount>
          <TextButton>ADICIONAR AO CARRINHO</TextButton>
        </Button>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <FlatList
        horizontal
        data={products}
        extraData={this.props}
        keyExtractor={(item) => String(item.id)}
        renderItem={this.renderProduct}
      />
    );
  }
}

export default Home;
