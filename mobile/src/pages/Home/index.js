import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
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
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

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

  handleNavigate = (products) => {
    const { navigation } = this.props;

    navigation.navigate('Cart', { products });
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
        <Button onPress={() => this.handleNavigate(item)}>
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
