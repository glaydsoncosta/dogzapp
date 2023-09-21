import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { gray_500, gray_800, primary } from '../styles/colors';
import { Breed } from '../interfaces/data';
import FastImage from 'react-native-fast-image';
import { assets } from '../assets';

type BreedListItemProps = {
  breed: Breed;
  onPress: (breed: Breed) => void;
};

export default function BreedListItem(props: BreedListItemProps) {
  const { breed, onPress } = props;

  return (
    <TouchableWithoutFeedback onPress={() => onPress(breed)}>
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <FastImage source={assets.icons.misc.breeds} resizeMode={FastImage.resizeMode.contain} style={styles.listItemIcon} tintColor={primary} />
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.breedTitleText}>{breed.name}</Text>
        </View>
        <View style={styles.rightContainer}>
          <FastImage source={assets.icons.misc.chevron} resizeMode={FastImage.resizeMode.contain} style={styles.chevronIcon} tintColor={gray_800} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  breedTitleText: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10
  },
  listItemIcon: {
    width: 32,
    height: 32
  },
  chevronIcon: {
    width: 18,
    height: 18
  },
  leftContainer: {
    width: '10%'
  },
  centerContainer: {
    width: '80%'
  },
  rightContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});
