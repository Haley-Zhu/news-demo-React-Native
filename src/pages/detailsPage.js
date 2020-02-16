import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import FontSizeButton from '../componnents/fontSizeButton';
import FontSlider from '../componnents/fontSlider';
import { getDetailById } from "../utils/axiosAPI";
import { useMappedState } from "redux-react-hook";

let fontSize;

const DetailsPage = ({ navigation }) => {
  const [detailData, setDetailData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  fontSize = useMappedState(state => state.fontSize);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const itemId = JSON.stringify(navigation.getParam("id", "NO-ID"));
    getDetailById(itemId).then(data => {
      const _detailData = {
        title: data.title.rendered,
        date: data.date,
        content: data.content.rendered
      };
      setDetailData(_detailData);
      setLoading(false);
    }).catch(error => {
      setError(true);
      setErrorInfo(error);
    });;
  };

  const renderLoadingView = () => {
    return (
      <View style={detailsStyles.container}>
        <ActivityIndicator animating={true} color="black" size="large" />
      </View>
    );
  };

  const renderErrorView = () => {
    return (
      <View>
        <Text>{`${errorInfo}`}</Text>
      </View>
    );
  }

  const renderDetailsView = () => {
    return (
      <View style={detailsStyles.container}>
        <FontSlider />
        <ScrollView style={detailsStyles.newsContainer}>
          <View>
            <Text style={detailsStyles.title}>{detailData.title}</Text>
          </View>
          <View>
            <Text style={detailsStyles.date}>{detailData.date}</Text>
          </View>
          <View>
            <Text style={detailsStyles.content}>{detailData.content}</Text>
          </View>
        </ScrollView>
      </View>
    );
  };

  if (loading && !error) { return renderLoadingView()}
  else if (error) { return renderErrorView()}
  return renderDetailsView();

};

DetailsPage.navigationOptions = () => ({
  headerTitle: null,
  headerRight: () => <FontSizeButton />
});

export default DetailsPage;
console.log("&&&&&&&&&&", fontSize);

var detailsStyles = StyleSheet.create({
  container: {
    flex:1,
    margin: 5,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  newsContainer: {
    margin:20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: 'justify'
  },
  date: {
    margin: 10
  },
  content: {
    fontSize: fontSize,
    textAlign: 'justify'
  }
});
