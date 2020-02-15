import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { getNewsList } from "../utils/axiosAPI";

const ListPage = ({ navigation }) => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getNewsList().then(data => {
      const dataSource = data.map(item => {
        return {
          id: item.id,
          image: item.type_img,
          title: item.title.rendered
        };
      });
      setDataSource(dataSource);
    });
  };

  const _renderItem = ({ item }) => {
    const image = item.image
      ? { uri: item.image }
      : require("../../assets/default-image.jpg");
    return (
      <TouchableOpacity onPress={() => this._onItemPress(item.id)}>
        <View style={listStyles.itemContainer}>
          <Image source={image} style={listStyles.itemImage} />
          <Text style={listStyles.itemTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderItemSeparatorComponent = () => (
    <View style={listStyles.itemSeparator}></View>
  );

  return (
    <View style={listStyles.container}>
      <FlatList
        data={dataSource}
        renderItem={_renderItem}
        ItemSeparatorComponent={_renderItemSeparatorComponent}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

ListPage.navigationOptions = () => ({
  title: null
});

export default ListPage;

const listStyles = StyleSheet.create({
  container: {
    margin: 20
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingVertical: 15,
    paddingHorizontal: 18
  },
  itemSeparator: { 
    height: 1, 
    backgroundColor: "#c2c3c4" 
  },
  itemImage: {
    width: 100,
    height: 80,
    marginRight: 20
  },
  itemTitle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 18
  },
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
});
