import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content:  center;
  elevation: 2;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const InputElement = styled(TextInput)`
  flex: 1;
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  padding: 10px 16px;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.text};
  padding: 0 4px 0 16px;
`;
