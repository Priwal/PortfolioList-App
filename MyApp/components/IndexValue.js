import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const IndexValue = ({val}) => (
  <View style={styles.detail}>
    <Text>Index</Text>

    <Text>{val}</Text>
  </View>
);

export default IndexValue;
