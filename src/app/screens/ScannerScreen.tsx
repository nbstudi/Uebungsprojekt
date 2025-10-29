import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { colors, spacing, typography } from "../theme";
import { RootStackScreenProps } from "../types/navigation";

type Props = RootStackScreenProps<"Scanner">;

export default function ScannerScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner Screen</Text>
      <Button
        title="Zu Home"
        color={colors.secondary}
        onPress={() => navigation.navigate("Home")}
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
