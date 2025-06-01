
export {};

declare global {
  interface Window {
    liveSupportChat?: {
      open: () => void;
      close: () => void;
      toggle: () => void;
    };
  }
}
