import React from 'react';
import t from 'react-native-image-picker';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,

  TouchableOpacity,
  Text,
} from 'react-native';

const App = () => {
  const clickHandler = () => {
    //function to handle click on floating Action Button
    alert('Floating Button Clicked');
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Example of React Native Floating Action Button
        </Text>
        <Text style={styles.textStyle}>
          Click on Action Button to see Alert
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={t.launchImageLibrary({}, (response) => {
            if (response.didCancel) {
              // user cancel image selection
            } else if (response.error) {
              // error
            } else {
              // her you access the image with response object
              console.log(response);
              this.setState({
                image: {
                  uri: response.uri,
                },
              });
            }
          })
        }
          style={styles.touchableOpacityStyle}>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});