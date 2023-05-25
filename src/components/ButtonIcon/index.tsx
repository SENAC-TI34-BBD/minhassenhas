import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export function ButtonIcon({...rest}: TouchableOpacityProps){
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <MaterialIcons
                name="content-copy"
                size={24}
                color="#FFF"
            />
        </TouchableOpacity>
    )
}
