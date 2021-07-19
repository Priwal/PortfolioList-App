import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Tags = ({isBonds, isCommodity, isFuturesOptions}) => (
  <View style={styles.tagsContainer}>
    {isBonds && (
      <View style={styles.bond}>
        <Text>Bonds</Text>
      </View>
    )}
    {isCommodity && (
      <View style={styles.commodity}>
        <Text>Commodities</Text>
      </View>
    )}
    {isFuturesOptions && (
      <View style={styles.FuturesOptions}>
        <Text>Futures and Options</Text>
      </View>
    )}
  </View>
);
export default Tags;
