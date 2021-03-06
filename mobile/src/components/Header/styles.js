import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const BasketContainer = styled.TouchableOpacity`
  flex: 1;
  height: 24px;
  width: 24px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 182px;
  height: 24px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: red;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
