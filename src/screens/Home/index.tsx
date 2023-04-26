import { View, Text } from "react-native";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Senhas</Text>
      <Button />
    </View>
  );
}
