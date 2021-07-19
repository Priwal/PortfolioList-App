import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header = ({text, subText}) => (
  <View style={styles.container}>
    <Text style={styles.title}> {text}</Text>
    <Text style={styles.subTitle}> {subText} </Text>
  </View>
);
export default Header;
