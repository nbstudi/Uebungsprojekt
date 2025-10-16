import './src/app/i18n';
import React, {Suspense} from "react";
import AppNavigator from "./src/app/navigation/AppNavigator";
import { View, ActivityIndicator } from "react-native";
import { QueryProvider } from "./src/app/providers/QueryProvider";

function Loading() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator />
    </View>
  );
}

export default function App() {
  return (
    <QueryProvider>
      <Suspense fallback={<Loading />}>
        <AppNavigator />
      </Suspense>
    </QueryProvider>
  );
}