import React from 'react'
import { View } from 'react-native';

type Props = {
  backgroundColor: string;
};

export const Background = ({backgroundColor }:Props) => {
  return (
    <View
        style={{
            position: 'absolute',
            backgroundColor: backgroundColor,
            top: -430,
            width: 1000,
            height: 1200,
            transform: [
                { rotate: '-70deg'}
            ]
        }}
    />
  )
}