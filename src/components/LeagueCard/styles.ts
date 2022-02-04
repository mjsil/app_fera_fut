import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
`;

export const Logo = styled.View`
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
`;

export const Icon = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Name = styled.Text`
  width: 100%;
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  margin-left: 20px;
`;
