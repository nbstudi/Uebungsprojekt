import { ExpoConfig } from "@expo/config";

const config: ExpoConfig = {
    name: "Uebungsprojekt",
    slug: "uebungsprojekt", // The slug should be lowercase and contain only URL-safe characters (a–z, 0–9, and hyphens)!
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.studibuch.uebungsprojekt"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      package: "com.studibuch.uebungsprojekt"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    plugins: [],
    extra: {
      eas: {
        projectId: "4b983ece-d198-4b6d-96d1-b91660556dd6"
      }
    }
};

export default config;