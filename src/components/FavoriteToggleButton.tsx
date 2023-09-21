import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { assets } from '../assets';

type FavoriteToggleButtonProps = {
  checked: boolean;
  onPress: () => void;
};

export default function FavoriteToggleButton(props: FavoriteToggleButtonProps) {
  const { checked, onPress } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.mainContainer}>
        <FastImage
          source={checked ? assets.icons.misc.favoriteToggleButtonChecked : assets.icons.misc.favoriteToggleButtonUnchecked}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.favoriteIcon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoriteIcon: {
    width: 24,
    height: 24
  }
});
