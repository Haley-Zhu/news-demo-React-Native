## Available Scripts

### `yarn start`

You could clone this repository.

Runs the app in the expo.

### `Features`

- Show news list using <Flatlist />.
- Press news list item move to detail page using react-navigation.
- Press fontSize Button to show fontSlider
- Move the thumb on slider can dynamically modify the news content font size.

### `Code Structure`

```js
|-- news-demo
    |-- .gitignore
    |-- package.json
    |-- README.md
    |-- yarn.lock
    |-- babel.config
    |-- app.json
    |-- App.js                            // entry file
    |-- assets
    |   |-- icon.png
    |   |-- default-image.jpg             // default image if data.image equals to null
    |   |-- splash.png
    |-- images                            // Android and iPhoneX capture
    |   |-- android_list.jpg
    |   |-- android_details.jpg
    |   |-- ios_list.jpg
    |   |-- ios_details.png
    |-- .expo-shared
    |   |-- assets.json
    |-- src
        |-- components
        |   |-- FontSizeButton.js         // Button on header right to call font slider
        |   |-- FontSlider.js             // Slider to modify content font size
        |-- navigators
        |   |-- AppNavigator.js           // create Stack Navigator
        |-- pages
        |   |-- DetailsPage.js            // Details Page
        |   |-- ListPage.js               // List Page
        |-- redux
        |   |-- actions.js                // describe the actions
        |   |-- reducers.js               // describe the reducers
        |   |-- store.js                  // create store
        |-- utils
            |-- axiosAPI.js               // get data by api
            |-- constants.js              // define constants
            |-- helpers.js                // some helping functions
```

### `Captures`

Android:

<img src=".\captures\android_list.jpg" alt="android_list" style="zoom:30%;" /><img src=".\captures\android_details.jpg" alt="android_details" style="zoom:30%;" />

ios:

<img src=".\captures\ios_list.jpg" alt="ios_list" style="zoom:30%;" /><img src=".\captures\ios_details.jpg" alt="ios_details" style="zoom:30%;" />