import React from 'react';
import {View, Text} from 'react-native';

const Followers = ({val}) => (
  <View>
    <View>
      <Text>Followers</Text>
    </View>
    <Text>{val}</Text>
  </View>
);

export default Followers;
