import styled from 'styled-components/native';

export const ProductInfo = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 75px;
  width: 70px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ProductControll = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #dfdfdf;
  border-radius: 5px;
  padding: 5px;
`;

export const ProductAmount = styled.TextInput`
  border-width: 2px;
  border-radius: 5px;
  border-color: #aaa;
  padding: 5px;
  min-width: 55px;
`;

export const ProductControllButton = styled.TouchableOpacity``;

export const ProductSubTotal = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const ProductTotal = styled.View`
  flex-direction: column;
  margin-top: 15px;
`;

export const TotalNumber = styled.Text`
  font-weight: bold;
  font-size: 30px;
  align-self: center;
`;

export const ProductButton = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  background: #11275f;
  align-items: center;
`;

export const TotalText = styled.Text`
  align-self: center;
  font-size: 18px;
  margin-bottom: 5px;
  color: #11275f;
`;
