import React from "react";
import { Text, View } from "react-native";
import { commonStyles } from "@/common";
import { ListProps } from "@/types";
import SectionHeading from "../section-heading";

export default function List({ items = [], bracket, color, title }: ListProps) {
  return (
    <View>
      <SectionHeading bracket={bracket} title={title} />
      {items.map((item: string) => (
        <Text style={[commonStyles.subtitle, { color }]} key={item}>
          {"> "}
          {item}
        </Text>
      ))}
    </View>
  );
}
