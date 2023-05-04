import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 86,
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  ImgBox: {
    width: 54,
    height: 54,
    borderRadius: 7,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 32,
    height: 32,
  },
  details: {
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    fontSize: 14,
    color: "#47495B",
  },
});
