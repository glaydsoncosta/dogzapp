import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { gray_800 } from '../../styles/colors';
import BreedListItem from '../../components/BreedListItem';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/MainStackNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { Breed } from '../../interfaces/data';
import { getSavedFavoriteList } from '../../util/common';
import FastImage from 'react-native-fast-image';
import { assets } from '../../assets';

type NavProps = StackNavigationProp<MainStackParamList>;

export default function Favorites() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavProps>();
  const [favoritesList, setFavoritesList] = useState<Breed[]>([]);
  const isFocused = useIsFocused();

  const fetchFavoritesList = async () => {
    const savedFavoriteList = await getSavedFavoriteList();
    setFavoritesList(savedFavoriteList);
  };

  useEffect(() => {
    fetchFavoritesList();
  }, [isFocused]);

  return (
    <View style={[styles.mainContainer, { top: top }]}>
      <StatusBar barStyle={'dark-content'} translucent />
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.pageTitle}>Favorites</Text>
          <Text style={styles.pageSubTitle}>This is your favorite breeds list</Text>
        </View>
        <View style={styles.breedsListContainer}>
          {favoritesList.length <= 0 ? (
            <View style={styles.emptyStateContainer}>
              <FastImage
                resizeMode={FastImage.resizeMode.cover}
                style={styles.noFavoritesEmptyStateImage}
                source={assets.icons.misc.noFavoritesYet}
              />
              <Text style={styles.pageTitle}>Ops, no favorites found!</Text>
              <Text style={styles.pageSubTitle}>Looks like your favorites list is empty</Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              style={styles.breedList}
              data={favoritesList}
              renderItem={({ item }) => (
                <BreedListItem
                  breed={item}
                  onPress={(breed: Breed) => {
                    navigation.navigate('BreedImages', { breed });
                  }}
                />
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  innerContainer: {
    padding: 20
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: '700'
  },
  pageSubTitle: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: '500',
    color: gray_800
  },
  breedsListContainer: {
    marginTop: 15,
    height: '89%'
  },
  breedList: {
    height: '100%'
  },
  emptyStateContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noFavoritesEmptyStateImage: {
    width: 128,
    height: 128,
    opacity: 0.5
  }
});
