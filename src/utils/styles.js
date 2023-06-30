import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  maxWidth: {
    alignSelf: "stretch",
    width: "100%",
    flexDirection: "column",
  },
  containerInner: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  containerH: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
  },
  containerTopo: {
    flexBasis: "80%",
  },
  containerBaixo: {
    flexBasis: "20%",
  },
  image: {
    minWidth: 300,
    height: 300,
  },
  textCenter: {
    textAlign: "center",
  },
  containerInner: {
    selfAlign: "stretch",
    // maxWidth: "90%",
    // marginHorizontal: "auto",
  },
  containerSoft: {
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
});

export default styles;
