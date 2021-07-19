import React from 'react';
import {View} from 'react-native';
import Header from './Header';
import Tags from './Tags';
import DetailsContainer from './DetailsContainer';
import styles from './styles';

const PortfolioCard = ({
  headerText,
  subText,
  isBond,
  isCommodity,
  isFuturesOptions,
}) => {
  return (
    <View style={styles.container}>
      <Header text={headerText} subText={subText} />
      <Tags
        isBonds={isBond}
        isCommodity={isCommodity}
        isFuturesOptions={isFuturesOptions}
      />
      <DetailsContainer />
    </View>
  );
};

export default PortfolioCard;
