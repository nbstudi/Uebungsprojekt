import { StyleSheet, Text, View, Button } from "react-native";
import { colors, spacing, typography } from "../theme";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList,'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Zum Profil"
        color={colors.primary}
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Zum Login"
        color={colors.primary}
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Zum Scanner"
        color={colors.primary}
        onPress={() => navigation.navigate('Scanner')}
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
