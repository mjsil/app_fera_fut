import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px;

  ${({theme, isActive}) => isActive && css`
    background-color: ${theme.colors.shape};
  `}
`;

export const Year = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  font-weight: bold;
`;

export const MoreInformation = styled.View`
  flex-direction: row;
`;

export const Label = styled(Year)`
  font-weight: normal;
  margin-right: 32px;
`;
