import {
  faCalendar,
  faCommentDots,
  faGem,
  faHeart,
  faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BottomNavContainer,
  NavButtonIcon,
  NavButtonLabel,
} from './styledComponents';

const Navigation: FC = (): JSX.Element => {
  const styles = StyleSheet.create({
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <BottomNavContainer>
      <View style={styles.button}>
        <NavButtonIcon icon={faCalendar} />
        <NavButtonLabel>My Plan</NavButtonLabel>
      </View>
      <View style={styles.button}>
        <NavButtonIcon icon={faTableCellsLarge} />
        <NavButtonLabel>Insights</NavButtonLabel>
      </View>
      <View style={styles.button}>
        <NavButtonIcon icon={faHeart} />
        <NavButtonLabel>Health</NavButtonLabel>
      </View>
      <View style={styles.button}>
        <NavButtonIcon icon={faGem} />
        <NavButtonLabel>Awards</NavButtonLabel>
      </View>
      <View style={styles.button}>
        <NavButtonIcon icon={faCommentDots} />
        <NavButtonLabel>Chatting</NavButtonLabel>
      </View>
    </BottomNavContainer>
  );
};

export default Navigation;
