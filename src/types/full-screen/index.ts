interface FullScreenSlideshowProps {
  visible: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

export default FullScreenSlideshowProps;
