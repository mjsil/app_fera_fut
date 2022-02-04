import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface LabelProps {
  margin: boolean;
}

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

export const TitleHeader = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.text};
  margin-left: 20px;
`;

export const Seasons = styled.View`
  flex: 1;
  padding: 20px 0 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
  font-weight: bold;
  margin-bottom: 16px;
  padding: 0 16px;
`;

export const HeaderSeason = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.shape_light};
  border-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => (theme.colors.shape)};
`;

export const LeftInformations = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<LabelProps>`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text};
  text-transform: uppercase;
  font-weight: bold;
  margin-right: ${({margin}) => margin ? '32px' : '0'};
`;

export const SeasonList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 16,
    paddingTop: 8
  }
})`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background: ${({theme}) => (theme.colors.shape)};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 16px;
  background: ${({theme}) => (theme.colors.shape)};
`;
