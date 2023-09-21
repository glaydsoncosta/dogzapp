import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { heightPercentToDP, widthPercentToDP } from '../util/scale';

type BreedImageProps = {
  imageURL: string;
  onPress: () => void;
};

const DEFAULT_IMAGE_WIDTH = widthPercentToDP('10%');
const DEFAULT_IMAGE_HEIGHT = heightPercentToDP('20%');

export default function BreedImage(props: BreedImageProps) {
  const { imageURL, onPress } = props;

  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <View style={styles.mainContainer}>
        <FastImage source={{ uri: imageURL }} resizeMode={FastImage.resizeMode.cover} style={styles.imageStyle} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: DEFAULT_IMAGE_WIDTH,
    height: DEFAULT_IMAGE_HEIGHT,
    marginBottom: heightPercentToDP('1%'),
    paddingRight: widthPercentToDP('45%')
  },
  imageStyle: {
    width: 180,
    height: 180,
    borderRadius: 10
  }
});
