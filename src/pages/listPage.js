import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator
} from "react-native";
import { getNewsList } from "../utils/axiosAPI";

const ListPage = ({ navigation }) => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");
  useEffect(() => {
    _fetchData();
  }, []);

  const _fetchData = () => {
    getNewsList().then(data => {
      const dataSource = data.map(item => {
        return {
          id: item.id,
          image: item.type_img,
          title: item.title.rendered
        };
      });
      setListData(dataSource);
      setLoading(false);
    }).catch(error => {
      setError(true);
      setErrorInfo(error);
    });
  };

  const _onItemPress = id => {
    console.log("!!!!!!!!!!!!!", id);
  };

  const _renderItem = ({ item }) => {
    const image = item.image
      ? { uri: item.image }
      : require("../../assets/default-image.jpg");
    return (
      <TouchableOpacity onPress={() => _onItemPress(item.id)}>
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

  const _renderLoadingView = () => {
    return (
      <View style={listStyles.container}>
        <ActivityIndicator animating={true} color="black" size="large" />
      </View>
    );
  };

  const _renderErrorView = () => {
    return (
      <View>
        <Text>errorInfo</Text>
      </View>
    );
  }

  const _renderListView = () => {
    return (
      <View style={listStyles.container}>
        <FlatList
          data={listData}
          renderItem={_renderItem}
          ItemSeparatorComponent={() => _renderItemSeparatorComponent()}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  if (loading && !error) { return _renderLoadingView()}
  else if (error) { return _renderErrorView()}
  return _renderListView();
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
    backgroundColor: "#c2c3c4",
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
