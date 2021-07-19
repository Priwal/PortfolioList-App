import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTitle: {
    fontSize: 15,
    color: 'cyan',
  },

  tagsContainer: {
    flexDirection: 'row',
  },
  bond: {
    borderRadius: 10,
    marginRight: 5,
    backgroundColor: 'yellow',
  },
  FuturesOptions: {
    borderRadius: 10,
    marginRight: 5,
    backgroundColor: 'red',
  },
  Commodities: {
    borderRadius: 10,
    marginRight: 5,
    backgroundColor: 'cyan',
  },

  detailsContainer: {
    flexDirection: 'row',
  },
  detail: {
    marginRight: 7,
  },
});
export default styles;
