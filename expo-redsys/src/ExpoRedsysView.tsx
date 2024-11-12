import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoRedsysViewProps } from './ExpoRedsys.types';

const NativeView: React.ComponentType<ExpoRedsysViewProps> =
  requireNativeViewManager('ExpoRedsys');

export default function ExpoRedsysView(props: ExpoRedsysViewProps) {
  return <NativeView {...props} />;
}
