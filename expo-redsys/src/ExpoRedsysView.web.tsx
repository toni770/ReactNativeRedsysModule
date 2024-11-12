import * as React from 'react';

import { ExpoRedsysViewProps } from './ExpoRedsys.types';

export default function ExpoRedsysView(props: ExpoRedsysViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
