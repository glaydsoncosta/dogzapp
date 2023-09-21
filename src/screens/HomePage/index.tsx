import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import Loader from '../../components/Loader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGetBreeds } from '../../services/queries/useBreeds';
import { gray_800 } from '../../styles/colors';
import BreedListItem from '../../components/BreedListItem';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/MainStackNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { Breed } from '../../interfaces/data';

type NavProps = StackNavigationProp<MainStackParamList>;

export default function HomePage() {
  const { top } = useSafeAreaInsets();
  const { isFetching: isLoadingBreeds, data: breeds } = useGetBreeds();
  const navigation = useNavigation<NavProps>();

  return (
    <View style={[styles.mainContainer, { top: top }]}>
      <StatusBar barStyle={'dark-content'} translucent />
      {isLoadingBreeds ? (
        <Loader loadingText="Loading breeds..." />
      ) : (
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.pageTitle}>Breeds</Text>
            <Text style={styles.pageSubTitle}>Tap the breed name to see images of it</Text>
          </View>
          <View style={styles.breedsListContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              style={styles.breedList}
              data={breeds?.list}
              renderItem={({ item }) => (
                <BreedListItem
                  breed={item}
                  onPress={(breed: Breed) => {
                    navigation.navigate('BreedImages', { breed });
                  }}
                />
              )}
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
  breedsListContainer: {
    marginTop: 15,
    height: '89%'
  },
  breedList: {
    height: '100%'
  }
});
