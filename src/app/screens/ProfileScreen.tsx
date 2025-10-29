import { StyleSheet, Text, View, Button } from "react-native";
import { colors, spacing, typography } from "../theme";
import { RootStackScreenProps } from "../types/navigation";

type Props = RootStackScreenProps<"Profile">;

export default function ProfileScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
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
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.md,
  },
  title: {
    ...typography.heading,
    color: colors.secondary,
    marginBottom: spacing.md,
  },
});
