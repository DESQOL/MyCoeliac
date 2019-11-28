import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    bottomOverlay: {
        flex: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
    },
    cameraIcon: {
        height: 40,
        margin: 5,
        width: 40,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
    },
});
