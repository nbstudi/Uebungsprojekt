import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { colors, spacing, typography } from "../theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type ScannerScreenProps = NativeStackScreenProps<RootStackParamList, 'Scanner'>;

export default function ScannerScreen({ navigation }: ScannerScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner Screen</Text>
      <Button
        title="Zu Home"
        color={colors.secondary}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  title: {
    ...typography.heading,
    color: colors.secondary,
    marginBottom: spacing.md,
  },
});
