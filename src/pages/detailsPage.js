import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from "react-native";
import FontSizeButton from "../componnents/FontSizeButton";
import FontSlider from "../componnents/FontSlider";
import { getDetailById } from "../utils/axiosAPI";
import { useMappedState } from "redux-react-hook";
import { fontSizeGroup } from "../utils/constants";
import { timeFormat_cn } from "../utils/helpers";

const DetailsPage = ({ navigation }) => {
  const fontValue = useMappedState(state => state.fontValue);
  const fontSize = fontSizeGroup[fontValue];

  const [font, setFont] = useState(fontSizeGroup[fontValue]);
  const [detailData, setDetailData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFont(fontSize);
  });

  const fetchData = () => {
    const itemId = JSON.stringify(navigation.getParam("id", "NO-ID"));
    getDetailById(itemId)
      .then(data => {
        const _detailData = {
          title: data.title.rendered,
          date: data.date_gmt,
          content: data.content.rendered
        };
        setDetailData(_detailData);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setErrorInfo(error);
      });
  };

  const renderLoadingView = () => {
    return (
      <View style={detailsStyles.loadingContainer}>
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
  };

  const renderDetailsView = () => {
    return (
      <View style={detailsStyles.container}>
        <FontSlider />
        <ScrollView style={detailsStyles.newsContainer}>
          <View>
            <Text style={detailsStyles.title}>{detailData.title}</Text>
          </View>
          <View>
            <Text style={detailsStyles.date}>
              {timeFormat_cn(detailData.date)}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: font, textAlign: "justify" }}>
              {detailData.content}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  };

  if (loading && !error) {
    return renderLoadingView();
  } else if (error) {
    return renderErrorView();
  }
  return renderDetailsView();
};

DetailsPage.navigationOptions = () => ({
  headerTitle: () => null,
  headerBackTitle: null,
  headerRight: () => <FontSizeButton />
});

export default DetailsPage;

var detailsStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    margin: 5,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  newsContainer: {
    margin: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "justify"
  },
  date: {
    margin: 10,
    fontSize: 16,
    color: "grey"
  }
});
