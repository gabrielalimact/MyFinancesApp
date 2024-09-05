import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.secondaryBackground,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title:{
    fontSize: 30,
    fontFamily: 'bold',
  },
  text: {
    fontFamily: 'regular',
  },
})