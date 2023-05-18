import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";

import { styles } from "./styles";

type Props = {
    img: ImageSourcePropType;
}

export function Option({ img }: Props){
    return (
        <TouchableOpacity style={styles.container}>
            <Image 
                source={img} 
                style={styles.img} 
                resizeMode="contain"
            />
        </TouchableOpacity>
    )
}