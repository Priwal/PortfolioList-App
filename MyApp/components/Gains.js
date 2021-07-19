import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Gains = ({val}) => (
  <View style={styles.detail}>
    <Text>Gains</Text>

    <Text>{val}</Text>
  </View>
);

export default Gains;
