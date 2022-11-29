import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const AppContainer = styled.View`
  height: ${Dimensions.get('screen').height}px;
  background-color: #f5ffcf;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NotificationContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 44px;
  height: 32px;
  border-radius: 16px;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-evenly;
`;

const TopBarWidth = Dimensions.get('screen').width - 32;

export const TopBar = styled.View`
  width: ${TopBarWidth}px;
  height: 54px;
  top: 64px;
  display: flex;
  flex-direction: row;
  align-self: center;
`;

export const TextContainer = styled.View`
  flex-grow: 4;
`;
export const MenuContainer = styled.View`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-self: flex-start;
`;

export const GraphLabelContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 28px;
  border-radius: 16px;
`;

export const HumanContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  width: 50%;
`;

export const GraphContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const CenterContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

export const BottomNavContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  height: 94px;
  padding-top: 10px;
  border: 1px solid #f0f0f0;
  border-radius: 25px;
  margin-bottom: 25px;
  background-color: #ffffff;
  align-self: flex-end;
`;
