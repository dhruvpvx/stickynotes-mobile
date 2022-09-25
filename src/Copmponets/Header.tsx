import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppImages, Colors} from '../res';

type Props = {
  title: string;
};

const Header = ({title}: Props) => {
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const icon = search ? 'closeIcon' : 'searchIcon';

  useEffect(() => {
    setSearchText('');
  }, [search]);

  return (
    <View style={styles.container}>
      {search ? (
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearchText}
          value={searchText}
          placeholder="Search..."
        />
      ) : (
        <Text style={styles.titleText}>{title}</Text>
      )}
      <TouchableOpacity
        onPress={() => setSearch(s => !s)}
        style={styles.searchIconView}>
        <Image source={AppImages[icon]} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

Header.defaultProps = {
  title: '',
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 6.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '3%',
    backgroundColor: Colors.WHITE,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  searchIcon: {
    width: '35%',
    height: undefined,
    aspectRatio: 1,
  },
  searchIconView: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  searchInput: {
    width: '80%',
    height: '100%',
    fontSize: 18,
    fontWeight: '500',
  },
});
