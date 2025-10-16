//import type { NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId?: string } | undefined;// Beispiel mit Param
  Login: undefined;
  Scanner: { initialMode?: "qr" | "barcode" } | undefined; // Beispiel mit optional Param
};

// Für Props in den einzelnen Screens
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;