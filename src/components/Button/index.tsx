import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

export function Button() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Nova senha</Text>
    </TouchableOpacity>
  );
}
