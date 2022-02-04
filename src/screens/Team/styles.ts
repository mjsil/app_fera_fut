import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px 16px;
  background-color: ${({theme}) => theme.colors.shape_light};
  margin-top: 20px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.shape};
`;

export const BackButton = styled(BorderlessButton)`
  width: 30px;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.text};
  margin-left: 20px;
`;

export const LoadContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const HeaderTeam = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.background};
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.shape};
`;

export const Logo = styled.View`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Name = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
  font-weight: bold;
  margin-top: 12px;
`;

export const ContentTeam = styled.View`
  background-color: ${({theme}) => theme.colors.shape_light};
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 16px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.shape};
`;

export const Label = styled.Text`
  flex: 1;
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Value = styled(Label)`
  font-weight: bold;
`;
