import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default {
  cardStyle: {
    width: deviceWidth * 0.45,
    paddingBottom: '10%',
    marginBottom: '5%',
    padding: '2%',
    borderRadius: 15,
    backgroundColor: 'white',
  },
};
