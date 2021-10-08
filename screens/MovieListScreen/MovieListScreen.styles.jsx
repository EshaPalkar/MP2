const { StatusBar, StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "blue",
  },
  movieCell: {
    backgroundColor: "lightblue",
    padding: 20,
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieCellTitle: { fontFamily: "Avenir", fontSize: 22 },
  movieCellSubtitle: { fontFamily: "Avenir", fontSize: 14 },
  movieCellLeft: { height: 80, width: 54 },
  movieCellImage: { height: 80, width: 54, resizeMode: "contain" },
  movieCellRight: {
    flex: 100,
    marginLeft: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "baseline",
  },
});