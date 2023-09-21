import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { assets } from '../assets';
import { primary } from '../styles/colors';

type NavBarBackButtonProps = {
  onPress: () => void;
};

export default function NavBarBackButton(props: NavBarBackButtonProps) {
  const { onPress } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.mainContainer}>
        <FastImage source={assets.icons.misc.arrowLeft} resizeMode={FastImage.resizeMode.contain} style={styles.favoriteIcon} tintColor={primary} />
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
    width: 22,
    height: 22
  }
});
