// IBMPlexMono_600SemiBold and _700Bold register without error via expo-font
// but iOS silently refuses to render them as the custom font (falls back to
// the system font) — a CoreText/RCTFont quirk, not a loading failure. Only
// 400/500 are used; heavier visual weight comes from size/case/letter-spacing
// instead.
export const FONT_REGULAR = "IBMPlexMono_400Regular";
export const FONT_MEDIUM = "IBMPlexMono_500Medium";
