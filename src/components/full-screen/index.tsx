import React from "react";
import { Modal, Pressable, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/context";
import { FullScreenSlideshowProps } from "@/types";
import { SlideshowCarousel } from "../slideshow";
import styles from "./styles";

function FullScreenSlideshow({
  visible,
  onClose,
  images,
  initialIndex = 0,
}: FullScreenSlideshowProps) {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <SafeAreaView
        style={[styles.modalContainer, { backgroundColor: theme.screenBackground }]}
      >
        <View style={styles.content}>
          <Pressable style={styles.closeButton} onPress={onClose} hitSlop={12}>
            <Ionicons name="close" size={28} color={theme.color} />
          </Pressable>
          <SlideshowCarousel
            key={initialIndex}
            images={images}
            width={width * 0.9}
            height={height * 0.6}
            initialIndex={initialIndex}
            onImagePress={onClose}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default FullScreenSlideshow;
