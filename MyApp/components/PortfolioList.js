import React from 'react';
import {FlatList} from 'react-native';
import PortfolioCard from './PortfolioCard';
import styles from './styles';
const data = [
  {
    title: 'Strategic contributions',
    subText: 'by Rachana ranade',
    isBond: true,
    isCommodities: true,
    isFuturesOptions: true,
  },
  {
    title: 'My win-win investment',
    subText: 'by Advika Hemangini',
    isBond: true,
    isCommodities: true,
    isFuturesOptions: true,
  },

  {
    title: 'My Portfolio',
    subText: 'Mike Vazovsky',
    isBond: true,
    isCommodities: true,
    isFuturesOptions: false,
  },
];

const PortfolioList = () => {
  return (
    <FlatList
      style={{marginTop: 30}}
      data={data}
      renderItem={({item}) => (
        <PortfolioCard
          headerText={item.title}
          subText={item.subText}
          isBond={item.isBond}
          isCommodities={item.isCommodities}
          isFuturesOptions={item.isFuturesOptions}
        />
      )}
    />
  );
};

export default PortfolioList;
