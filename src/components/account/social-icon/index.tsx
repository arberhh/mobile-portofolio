import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ExternalLink from "../../external-link";
import { SocialIconProps } from "@/types";
import { commonStyles } from "@/common";

export default function SocialIcon({ color, url, iconType }: SocialIconProps) {
  return (
    <ExternalLink url={url}>
      <Ionicons name={`logo-${iconType}`} size={26} color={color} style={commonStyles.icon} />
    </ExternalLink>
  );
}
