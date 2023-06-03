import { useCallback, useState } from "react";

import { View, Text, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

import { styles } from "./styles";

type Account = {
	id: string;
	name: string;
	userOrEmail: string;
	password: string;
};

export function Home() {
	const [accounts, setAccounts] = useState<Account[]>([]);
	const { navigate } = useNavigation();

	function handleRegister() {
		navigate("register");
	}

	function handleOpen(account: Account) {
		navigate("register", { account });
	}

	useFocusEffect(
		useCallback(() => {
			AsyncStorage.getItem("@minhasenha:accounts").then((response) => {
				const storage = response ? JSON.parse(response) : [];
				setAccounts(storage);
			});
		}, [])
	);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Minhas Senhas</Text>

			<FlatList
				data={accounts}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Card
						name={item.name}
						userOrEmail={item.userOrEmail}
						onPress={() => handleOpen(item)}
					/>
				)}
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
