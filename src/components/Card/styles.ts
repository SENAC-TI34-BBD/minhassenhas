import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
       height: 86,
       width: '100%',
       backgroundColor: '#FFF',
       borderRadius: 7,
       alignItems: 'center',
       padding: 16,
       flexDirection: 'row',
       marginBottom: 16
    },
    ImgBox: {
        width: 54,
        height: 54,
        borderRadius: 7,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 32,
        height: 32
    },
    details: {
        marginLeft: 12
    },
    title: {
       fontSize: 18,
       fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 14,
        color: '#47495B'
    }
});