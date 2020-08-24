import styled from 'styled-components/native';
// import { darken } from 'polished';

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 260px;
  height: 345px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 240px;
`;

export const ProductTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  background: #11275f;
  border-radius: 5px;
  margin-top: auto;
`;

export const TextButton = styled.Text`
  color: #fff;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProductAmount = styled.Text`
  padding: 12px;
  background: #0e1d42;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
