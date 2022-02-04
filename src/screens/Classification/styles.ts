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

export const HeaderClassification = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.shape_light};
  border-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => (theme.colors.shape)};
`;

export const RightInformations = styled.View`
  width: 100px;
  background-color: ${({theme}) => theme.colors.text};
`;

export const LeftInformations = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text};
  text-transform: uppercase;
  margin-left: 12px;
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

export const ClassificationList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 16,
    paddingTop: 8
  }
})``;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background: ${({theme}) => (theme.colors.shape)};
`;
