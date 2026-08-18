import React from "react";
import { Modal, View, Image, Pressable } from "react-native";
import { FullScreenProps } from "@/types";
import styles from "./styles";

const FullScreenImage = ({
  visible,
  onClose,
  imageUri,
  color,
}: FullScreenProps) => {
  return (
    <Modal
      style={{ flex: 1 }}
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <Pressable onPress={onClose} style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            source={{ uri: imageUri }}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default FullScreenImage;
