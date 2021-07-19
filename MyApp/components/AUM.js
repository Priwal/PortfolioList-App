import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const AUM = ({val}) => (
  <View style={styles.detail}>
    <Text>AUM</Text>

    <Text>{val}</Text>
  </View>
);

export default AUM;
