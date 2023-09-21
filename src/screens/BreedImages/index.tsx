import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import Loader from '../../components/Loader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGetBreedImages } from '../../services/queries/useBreeds';
import { gray_800 } from '../../styles/colors';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/MainStackNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import FavoriteToggleButton from '../../components/FavoriteToggleButton';
import NavBarBackButton from '../../components/NavBarBackButton';
import BreedImage from '../../components/BreedImage';
import { breedIsFavorited, favoriteBreed } from '../../util/common';

type NavProps = StackNavigationProp<MainStackParamList>;
type RouteProps = RouteProp<MainStackParamList, 'BreedImages'>;

export default function BreedImages() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavProps>();
  const route = useRoute<RouteProps>();
  const { breed } = route.params;
  const { isFetching: isLoadingBreedImages, data: breedImages, refetch: refetchImages } = useGetBreedImages({ breedName: breed.name });
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    refetchImages();
    checkIsFavorited();
  }, []);

  const checkIsFavorited = async () => {
    const favoritedFlag = await breedIsFavorited(breed);
    setIsFavorited(favoritedFlag);
  };

  return (
    <View style={[styles.mainContainer, { top: top }]}>
      <StatusBar barStyle={'dark-content'} translucent />
      {isLoadingBreedImages ? (
        <Loader loadingText="Loading images..." />
      ) : (
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
              <NavBarBackButton onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.centerContainer}>
              <Text style={styles.pageTitle}>{breed.name}</Text>
              <Text style={styles.pageSubTitle}>Tap the heart to favorite this breed</Text>
            </View>
            <View style={styles.rightContainer}>
              <FavoriteToggleButton
                checked={isFavorited}
                onPress={() => {
                  favoriteBreed(breed);
                  setIsFavorited(!isFavorited);
                }}
              />
            </View>
          </View>
          <View style={styles.imageListContainer}>
            <FlatList
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              style={styles.breedImageList}
              contentContainerStyle={styles.breedImageListContainer}
              data={breedImages?.message}
              renderItem={({ item }) => <BreedImage imageURL={item} onPress={() => {}} />}
            />
          </View>
        </View>
      )}
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
  imageListContainer: {
    marginTop: 15,
    height: '89%'
  },
  breedImageList: {
    height: '100%'
  },
  breedImageListContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    width: '6%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerContainer: {
    width: '80%',
    paddingLeft: 10
  },
  rightContainer: {
    width: '10%'
  }
});
