import { View, Text, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

import { styles } from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  function handleRegister() {
    navigate("register");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Senhas</Text>

      <FlatList
        data={["1", "2", "3", "4", "5", "6", "7", "8"]}
        keyExtractor={(item) => item}
        renderItem={() => <Card />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>
            Você ainda não cadastrou nenhuma senha.
          </Text>
        )}
      />

      <Button title="Nova Senha" onPress={handleRegister} />
    </View>
  );
}
