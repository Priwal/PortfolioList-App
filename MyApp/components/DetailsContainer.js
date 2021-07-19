import React from 'react';
import {View, Text} from 'react-native';
import AUM from './AUM';
import Gains from './Gains';
import IndexValue from './IndexValue';
import Followers from './Followers';
import styles from './styles';

const DetailsContainer = ({text, subText}) => (
  <View style={styles.detailsContainer}>
    <AUM val={12} />
    <Gains val={14} />
    <IndexValue val={22} />
    <Followers val={50} />
  </View>
);

export default DetailsContainer;
