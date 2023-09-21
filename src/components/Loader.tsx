import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { primary } from '../styles/colors';

type LoaderProps = {
  loadingText?: string;
};

export default function Loader(props: LoaderProps) {
  const { loadingText } = props;
  return (
    <View style={styles.mainContainer}>
      <ActivityIndicator color={primary} size="small" />
      <Text style={styles.loadingTextStyle}>{loadingText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingTextStyle: {
    marginTop: 10
  }
});
