import React from "react";
import { Modal, View, Image, Pressable } from "react-native";
import { FullScreenProps } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";

function FullScreenImage({
  visible,
  onClose,
  imageUri,
  color,
}: FullScreenProps) {
  return (
    <Modal
      style={commonStyles.flex}
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <Pressable onPress={onClose} style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            source={{ uri: imageUri }}
            style={commonStyles.flex}
            resizeMode="contain"
          />
        </View>
      </Pressable>
    </Modal>
  );
}

export default FullScreenImage;
