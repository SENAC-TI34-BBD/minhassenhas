import { View, TextInput, TextInputProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export function InputPassword({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput secureTextEntry style={styles.input} {...rest} />
      <MaterialIcons name="visibility" size={24} color="#47495B" />
    </View>
  );
}
