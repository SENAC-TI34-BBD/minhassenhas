import { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { options } from "../../utils/options";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Option } from "../../components/Option";
import { InputPassword } from "../../components/InputPassword";
import { ButtonIcon } from "../../components/ButtonIcon";

type ParamsProps = {
	account: {
		id: string;
		name: string;
		userOrEmail: string;
		password: string;
	};
};

export function Register() {
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [userOrEmail, setUserOrEmail] = useState("");

	const { goBack } = useNavigation();
	const route = useRoute();

	const params = route.params as ParamsProps;

	async function handleCopyassword() {
		await Clipboard.setStringAsync(password);
		Alert.alert(
			"ℹ️ Informação",
			"🔑 Senha copiada para área de transferência!"
		);
	}

	async function handleSave() {
		const id = new Date().getTime().toString();
		const newAccount = {
			id,
			password,
			name,
			userOrEmail,
		};
		const response = await AsyncStorage.getItem("@minhasenha:accounts");
		const storage = response ? JSON.parse(response) : [];
		await AsyncStorage.setItem(
			"@minhasenha:accounts",
			JSON.stringify([newAccount, ...storage])
		);
		Alert.alert("ℹ️ Informação", "🔑 Conta salva com sucesso!");
		goBack();
	}

	async function handleRemove() {
		const response = await AsyncStorage.getItem("@minhasenha:accounts");
		const storage = response ? JSON.parse(response) : [];

		Alert.alert("Remover", "Deseja realmente remover essa conta?", [
			{ text: "Não", style: "cancel" },
			{ text: "Sim", onPress: () => removeAccount(storage) },
		]);
	}

	function removeAccount(storage: Array<Storage>) {
		const newStorage = storage.filter((item: Storage) => {
			return item.id !== params.account.id;
		});
		AsyncStorage.setItem("@minhasenha:accounts", JSON.stringify(newStorage));
		goBack();
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={goBack}>
					<MaterialIcons name="arrow-back-ios" size={24} color="#47495B" />
				</TouchableOpacity>

				<Text style={styles.title}>Senha</Text>
				<TouchableOpacity onPress={handleRemove}>
					<MaterialIcons name="delete" size={24} color="#47495B" />
				</TouchableOpacity>
			</View>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.options}>
				{options.map((item) => (
					<Option key={item.name} img={item.img} />
				))}
			</ScrollView>

			<Input
				placeholder="Nome da conta"
				onChangeText={setName}
				defaultValue={params ? params.account.name : ""}
			/>

			<Input
				placeholder="Usuário ou e-mail"
				onChangeText={setUserOrEmail}
				defaultValue={params ? params.account.userOrEmail : ""}
			/>

			<InputPassword
				placeholder="Senha"
				onChangeText={setPassword}
				defaultValue={params ? params.account.password : ""}
			/>

			<View style={styles.footer}>
				<Button title="Salvar" onPress={handleSave} />
				<ButtonIcon onPress={handleCopyassword} />
			</View>
		</View>
	);
}
