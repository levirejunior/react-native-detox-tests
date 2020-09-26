import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flexDirection: 'column'
    },
    videoImage:{
        width,
        height: height * 0.4
    },
    statusBar: {
        width,
        height: 5,
        backgroundColor: '#3F25E5'
    },
    mediaContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 27
    },
    textContainer: {
        width,
        paddingHorizontal: 27   
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    title:{
        fontWeight:'bold',
        fontSize: 20
    },
    description: {
        fontSize: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 27,
        justifyContent: 'space-between',
        width
    },
    touchable: {
        backgroundColor: 'rgba(63, 37, 229, 0.15)',
        height: width * 0.15,
        width: width * 0.15,
        borderRadius: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: width * 0.30,
        width: width * 0.30,
        borderRadius: width * 0.30,
        backgroundColor: 'rgba(63, 37, 229, 0.15)',
    },
    playButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: width * 0.28,
        width: width * 0.28,
        borderRadius: width * 0.28,
        backgroundColor: '#3F25E5',
    },
    soundBarContainer: {
        width: 320,
        height: 18,
        backgroundColor: '#3F25E5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    soundBar: {
        width: 300,
        height: 18/3,
        backgroundColor: '#FFFFFF',
        borderRadius: width * 0.15
    }
})