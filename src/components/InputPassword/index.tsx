import { useState } from 'react';
import { View, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export function InputPassword({...rest}: TextInputProps){
    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword(){
        setShowPassword(prevState => !prevState);
    }

    return (
        <View style={styles.container}>        
            <TextInput 
                secureTextEntry={!showPassword}
                style={styles.input} 
                {...rest} 
            />

            <TouchableOpacity onPress={toggleShowPassword}>
                <MaterialIcons 
                    name={showPassword ? 'visibility-off' : 'visibility' } 
                    size={24}
                    color="#47495B"
                />
            </TouchableOpacity>
        </View>
    )
}