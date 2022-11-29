/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {faBolt, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Graph from './src/components/Graph';
import Navigation from './src/components/Navigation';

import {
  AppContainer,
  Avatar,
  CenterContainer,
  Description,
  GraphContainer,
  HumanContainer,
  MenuContainer,
  NotificationContainer,
  NotificationIcon,
  NotificationNumber,
  TextContainer,
  Title,
  TopBar,
} from './src/components/styledComponents';
import {
  Body as HumanBody,
  Head as HumanHead,
} from './src/components/svgComponents/Human';

const App = () => {
  return (
    <AppContainer>
      <TopBar>
        <TextContainer>
          <Title>Health</Title>
          <Description>Your body condition</Description>
        </TextContainer>
        <MenuContainer>
          <NotificationContainer>
            <NotificationIcon icon={faBolt} size={12} />
            <NotificationNumber>1</NotificationNumber>
          </NotificationContainer>
          <Avatar icon={faCircleUser} size={54} />
        </MenuContainer>
      </TopBar>
      <CenterContainer>
        <HumanContainer>
          <HumanHead />
          <HumanBody />
        </HumanContainer>
        <GraphContainer>
          <Graph
            segments={5}
            value={23.2}
            valueLabel={'BMI'}
            levelLabel={'Normal'}
            colors={{
              textColor: '#8FBD12',
              containerColor: '#EEF3DF',
            }}
          />
          <Graph
            segments={3}
            value={0.96}
            valueLabel={'WHR'}
            levelLabel={'Average'}
            colors={{
              textColor: '#FDA901',
              containerColor: '#FFF0D2',
            }}
          />
        </GraphContainer>
      </CenterContainer>
      <Navigation />
    </AppContainer>
  );
};

export default App;
