import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GraphLabel,
  GraphLabelContainer,
  GraphValue,
  GraphValueLabel,
} from './styledComponents';

interface GraphProps {
  segments: number;
  value: number;
  valueLabel: string;
  levelLabel: string;
  colors: {
    textColor: string;
    containerColor: string;
  };
}

const Graph: FC<GraphProps> = (props: GraphProps): JSX.Element => {
  const segments = props.segments;
  const value = props.value;
  const valueLabel = props.valueLabel;
  const levelLabel = props.levelLabel;
  const colors = props.colors;
  const styles = StyleSheet.create({
    labelColor: {
      backgroundColor: colors.containerColor,
    },
    textColor: {
      color: colors.textColor,
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      flexGrow: 2,
    },
    graph: {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: 5,
    },
  });
  return (
    //<GraphSegments segments={segments} colors = {colors} />
    <View style={styles.container}>
      <View style={styles.graph}>
        <GraphValue>{value}</GraphValue>
        <GraphValueLabel>{valueLabel}</GraphValueLabel>
      </View>
      <GraphLabelContainer style={styles.labelColor}>
        <GraphLabel style={styles.textColor}>{levelLabel}</GraphLabel>
      </GraphLabelContainer>
    </View>
  );
};

export default Graph;
