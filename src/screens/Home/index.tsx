import { View, Text } from "react-native";
import { Button } from "../../components/Button";

import { styles } from "./styles";
import { Card } from "../../Card";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Senhas</Text>
      <Card />
      <Card />
      <Card />
      <Button title={"Nova Senha"} />
    </View>
  );
}
