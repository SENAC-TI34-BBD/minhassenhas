import { View, TouchableOpacity, Text, Image  } from 'react-native';

import gmail from '../../assets/gmail.png';

import { styles } from './styles';

export function Card(){
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.ImgBox}>
                <Image 
                    source={gmail} 
                    style={styles.img}
                    resizeMode="contain"
                /> 
            </View>

            <View style={styles.details}>
                <Text style={styles.title}>
                    Gmail
                </Text>

                <Text style={styles.subtitle}>
                    rodrigo.rgtic@gmail.com
                </Text>
            </View>
        </TouchableOpacity>
    );
}