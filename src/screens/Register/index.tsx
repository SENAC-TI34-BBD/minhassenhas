import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { options } from "../../utils/options";

import { Option } from "../../components/Option";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

export function Register() {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#47495B" />
        </TouchableOpacity>

        <Text style={styles.title}>Senha</Text>

        <MaterialIcons name="delete" size={24} color="#47495B" />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.options}
      >
        {options.map((item) => (
          <Option key={item.name} img={item.img} />
        ))}
      </ScrollView>

      <Input placeholder="Nome da conta" />
      <Input placeholder="Usuário ou e-mail" />
      <InputPassword placeholder="Senha" />
    </View>
  );
}
