import { ConfigPlugin, withAndroidManifest } from "expo/config-plugins";

const withInternetPermission: ConfigPlugin = (config) => {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;

    if (!androidManifest.manifest["uses-permission"]) {
      androidManifest.manifest["uses-permission"] = [];
    }

    androidManifest.manifest["uses-permission"].push({
      $: {
        "android:name": "android.permission.INTERNET",
      },
    });

    return config;
  });
};

export default withInternetPermission;
