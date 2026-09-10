import React from "react";
import { Linking, Platform, Pressable, PressableProps } from "react-native";

// react-native-web supports `href`/`hrefAttrs` on Pressable/View to render a
// real anchor tag on web, but react-native's own type defs don't know about
// them (they're a web-only addition), so we widen the prop type locally.
type WebLinkProps = {
  href?: string;
  hrefAttrs?: { target?: string; rel?: string };
};

const WebPressable = Pressable as unknown as React.ComponentType<PressableProps & WebLinkProps>;

interface ExternalLinkProps extends Omit<PressableProps, "onPress"> {
  url: string;
  children: React.ReactNode;
}

// On web, `Linking.openURL` opens the link via `window.open`, which mobile
// browsers (iOS Safari and Chrome for Android in particular) frequently
// refuse to trust as a direct user gesture once it's routed through a
// component's press-handling layer — the result is an empty new tab instead
// of the target page. Rendering a real `<a>` element (via `href`) sidesteps
// that entirely: the browser handles the click natively, so it's never
// mistaken for an untrusted popup. Native platforms are unaffected either
// way and keep using `Linking.openURL`.
function ExternalLink({ url, children, ...rest }: ExternalLinkProps) {
  const isMailto = url.startsWith("mailto:");

  function handlePress() {
    Linking.openURL(url);
  }

  return (
    <WebPressable
      {...rest}
      onPress={Platform.OS === "web" ? undefined : handlePress}
      href={Platform.OS === "web" ? url : undefined}
      hrefAttrs={isMailto ? undefined : { target: "_blank", rel: "noopener noreferrer" }}
    >
      {children}
    </WebPressable>
  );
}

export default ExternalLink;
