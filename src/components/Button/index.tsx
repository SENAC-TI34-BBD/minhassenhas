import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

export function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Nova senha</Text>
    </TouchableOpacity>
  );
}
