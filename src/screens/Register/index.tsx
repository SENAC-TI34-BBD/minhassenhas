import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export function Register() {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
