import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { getDetailById } from "../utils/axiosAPI";

const DetailsPage = ({ navigation }) => {
  const [detailData, setDetailData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

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
    });
  };

  const renderDetailsView = () => {
    return (
      <View style={detailsStyles.container}>
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

  return renderDetailsView();
};

DetailsPage.navigationOptions = () => ({
  title: null
});

export default DetailsPage;
const font = 20;

var detailsStyles = StyleSheet.create({
  container: {
    margin: 5,
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
    fontSize: font,
    textAlign: 'justify'
  }
});
