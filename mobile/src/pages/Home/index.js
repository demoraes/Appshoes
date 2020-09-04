/* eslint-disable import/no-named-as-default */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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

  /**
   * - Função disparada quando o usuário clica no botão
   * - actions sempre conterão um type e o conteudo
   */
  handleAddProduct = (id) => {
    /**
     * Propriedade que é reçebida atraves da corverção de actions em propriedades
     */
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <Button onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={15} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
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

/**
 * Converte pedassos do estado, ou seja reducers, em propriedades para o component
 * no caso abaixo está sendo atualizado o amount do produto selecionado
 */
const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

/**
 * Converte actions do redux em propriedades para o component
 */
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);
/**
 * connect: conecta o component com o estado do redux
 */
export default connect(mapStateToProps, mapDispatchToProps)(Home);
