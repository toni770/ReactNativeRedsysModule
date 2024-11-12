import { ConfigPlugin, withAndroidManifest } from "expo/config-plugins";

const withInternetPermission: ConfigPlugin = (config) => {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;

    // Asegúrate de que tools está definido en el xmlns
    if (!androidManifest.manifest.$["xmlns:tools"]) {
      androidManifest.manifest.$["xmlns:tools"] =
        "http://schemas.android.com/tools";
    }

    // Verifica si la etiqueta application existe
    if (
      androidManifest.manifest.application &&
      androidManifest.manifest.application.length > 0
    ) {
      const application = androidManifest.manifest.application[0];

      // Añade tools:replace="android:allowBackup" y android:allowBackup="true"
      application.$["tools:replace"] = "android:allowBackup";
      application.$["android:allowBackup"] = "true";
    } else {
      throw new Error("No <application> tag found in AndroidManifest.xml");
    }

    return config;
  });
};

export default withInternetPermission;
