import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { AirbnbRating, Image } from '@rneui/themed';
import { Button, Stack } from "@react-native-material/core";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { ImageBackground } from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  tinyYellowCircle: {
    flex: 1,
    justifyContent: 'center',
  },
  Logo: {
    resizeMode: 'contain',
    marginTop: '30%',
    marginBottom: '70%',

    width: 100,
    height: 100,
  },
  buttonLogin: {
    backgroundColor: '#0A3B2D',
    borderTopRadius: 40,
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSignUp: {
    margin: '4%',
    borderWidth: 1,
    borderColor: '#0A3B2D',
    backgroundColor: '#E7E7E0',
    marginBottom: 40,
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstText: {
    fontSize: 30,
    color: '#0A3B2D',
    fontFamily: "DMSerifDisplay-Regular"

  },
  secondText: {
    fontSize: 18,
    color: '#0A3B2D',
    marginTop: '7%',
    fontFamily: "Poppins-Regular"

  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '15%',
  }
});


function AuthentificationScreen(props) {
  const { navigation } = props;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E7E7E0' }} >
      <StatusBar backgroundColor={'#E7E7E0'} />
      <ImageBackground
        style={styles.tinyYellowCircle}
        source={require('../assets/elipses.png')}
        resizeMode='contain'
      >

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={styles.Logo}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.firstText}>Maintain your trust</Text>
          <Text style={styles.secondText}>Donate with no doubts.</Text>
        </View>

        <Stack style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button
            style={styles.buttonLogin}
            title={"LOG IN"}


            onPress={() => navigation.navigate('whoAreYou')}
          />
          <Button
            style={styles.buttonSignUp}
            title="SIGN UP"
            tintColor='#0A3B2D'
            onPress={() => navigation.navigate('whoAreYou')}
          />
        </Stack>

      </ImageBackground>
    </SafeAreaView>
  );
}

export default AuthentificationScreen;
