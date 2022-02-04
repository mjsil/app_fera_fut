import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 95px;
  background-color: ${({theme}) => theme.colors.shape_light};
  margin-top: 20px;
  justify-content: flex-end;
  padding: 16px 16px 20px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.shape};
`;

export const Leagues = styled.View`
  flex: 1;
  padding: 20px 16px 0;
`;

export const LoadContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
  font-weight: bold;
  margin-bottom: 16px;
`;

export const LeagueList = styled.FlatList.attrs({
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

export const Footer = styled.View`
  width: 100%;
  padding-bottom: 16px;
`;
