import { StyleSheet } from 'react-native';
import { White } from '../styles/config/colors';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: White,
      alignItems: "center",
      justifyContent: "space-between"
    },
    logo: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
      alignSelf: "center"
    },
    form: {
      flex: 1,
      justifyContent: "center",
      width: "80%"
    }
  });
