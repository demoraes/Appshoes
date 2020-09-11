/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

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

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ScrollView horizontal>
      {products.map((product) => (
        <Product key={product.id}>
          <ProductImage
            source={{
              uri: product.image,
            }}
          />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{formatPrice(product.price)}</ProductPrice>
          <Button onPress={() => handleAddProduct(product.id)}>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={15} />
              <ProductAmountText>{amount[product.id] || 0}</ProductAmountText>
            </ProductAmount>
            <TextButton>ADICIONAR AO CARRINHO</TextButton>
          </Button>
        </Product>
      ))}
    </ScrollView>
  );
}
