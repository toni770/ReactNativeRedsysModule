import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoRedsys.web.ts
// and on native platforms to ExpoRedsys.ts
import ExpoRedsysModule from './ExpoRedsysModule';
import ExpoRedsysView from './ExpoRedsysView';
import { ChangeEventPayload, ExpoRedsysViewProps } from './ExpoRedsys.types';

// Get the native constant value.
export const PI = ExpoRedsysModule.PI;

export function hello(): string {
  return ExpoRedsysModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoRedsysModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoRedsysModule ?? NativeModulesProxy.ExpoRedsys);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoRedsysView, ExpoRedsysViewProps, ChangeEventPayload };
