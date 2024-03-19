import React from 'react'
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WHITE_COLOR } from '../../../constants';
import { SocialIconProps } from '../../../types';
import { commonStyles } from '../../../common';

export default function SocialIcon({ color, onPress, iconType }: SocialIconProps) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={`logo-${iconType}`} size={26} color={color} style={commonStyles.icon} />
    </Pressable>
  )
}
