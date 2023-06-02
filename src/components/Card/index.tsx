import { View, TouchableOpacity, Text, Image } from "react-native";

import gmail from "../../assets/gmail.png";

import { styles } from "./styles";

type Props = {
	name: string;
	userOrEmail: string;
};

export function Card({ name, userOrEmail }: Props) {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.ImgBox}>
				<Image source={gmail} style={styles.img} resizeMode="contain" />
			</View>

			<View style={styles.details}>
				<Text style={styles.title}>{name}</Text>

				<Text style={styles.subtitle}>{userOrEmail}</Text>
			</View>
		</TouchableOpacity>
	);
}
