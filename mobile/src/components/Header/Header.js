/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ cartSize, navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

/**
 * No primeiro parametro o connect recebe a função state onde é retornado o estado do componente, serve para termos acesso aos dados do estado
 * toda vez que o cartSize é mudado o component é renderizado denovo
 */
export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
