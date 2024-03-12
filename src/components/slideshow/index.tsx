import React, { createRef, useState } from 'react';
import { View, ScrollView, Image, Pressable, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context';
import { commonStyles } from '../../common';
import styles from './styles';

interface SlideshowProps {
  images: string[];
  onImagePress: (url: string) => void;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, onImagePress }) => {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const windowWidth: number = width;
  const slideHeight: number = height / 3.2;
  const scrollViewRef = createRef<ScrollView>();

  const handlePrevious = () => {
    const index = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({ x: index * windowWidth, animated: true });

  };

  const handleNext = () => {
    const index = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({ x: index * windowWidth, animated: true });
  };

  return (
    <View style={{ width: windowWidth, height: slideHeight }}>
      <View style={styles.navigationLeft}>
        <Pressable onPress={handlePrevious}>
          <Ionicons name="chevron-back" size={24} color={theme.color} />
        </Pressable>
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        onScroll={(event) => {
          const offset: number = event.nativeEvent.contentOffset.x;
          const index: number = Math.round(offset / windowWidth);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={200}
      >
        {images.map((image: string, index: number) => (
          <Pressable onPress={() => onImagePress(image)} key={index} style={[styles.slide, { width: windowWidth, height: slideHeight }]}>
            {/* Replace 'image' with your image component */}
            <Image resizeMode='contain' source={{ uri: image }} style={[commonStyles.fullPercentage]} borderRadius={8} />
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.navigationRight}>
        <Pressable onPress={handleNext}>
          <Ionicons name="chevron-forward" size={24} color={theme.color} />
        </Pressable>
      </View>
      <View style={styles.navigation}>
        <View style={styles.dots}>
          {images.map((_, index: number) => (
            <View key={index} style={[styles.dot, index === currentIndex && { backgroundColor: theme.color }]} />
          ))}
        </View>
      </View>
    </View>
  );
};



export default Slideshow;