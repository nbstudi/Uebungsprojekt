import { StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "../theme";
import { RootStackScreenProps } from "../types/navigation";
import PrimaryButton from "../components/buttons/PrimaryButton";

type Props = RootStackScreenProps<"Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <PrimaryButton
        title="Zum Profil"
        onPress={() => navigation.navigate("Profile")}
      />
      <PrimaryButton
        title="Zum Login"
        onPress={() => navigation.navigate("Login")}
      />
      <PrimaryButton
        title="Zum Scanner"
        onPress={() => navigation.navigate("Scanner")}
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
    color: colors.primary,
    marginBottom: spacing.md,
  },
});
