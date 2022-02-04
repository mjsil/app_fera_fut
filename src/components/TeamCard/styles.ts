import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface LabelBoldProps {
  margin: boolean;
}

export const Container = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const LeftInformations = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.View`
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  margin-left: 20px;
`;

export const Icon = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  margin-left: 12px;
`;

export const LabelBold = styled(Label)<LabelBoldProps>`
  font-weight: bold;
  margin: 0;

  ${({margin}) => margin && css`
    margin-left: 12px;
  `}
`;

export const RightInformations = styled.View`
  flex-direction: row;
`;
