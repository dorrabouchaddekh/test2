import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { Card } from '@rneui/themed';


function WhoAreYou(props) {
  const { navigation } = props;
  const styles = StyleSheet.create({
    container: {

    },
    firstText: {
      fontSize: 28,
      color: '#0A3B2D',
      fontFamily: "DMSerifDisplay-Regular"

    },
    secondText: {
      fontSize: 18,
      color: 'black',
      marginTop: '4%',
      fontFamily: "Poppins-Regular"


    },
    cardContainer: {
      backgroundColor:'red',
      height: 200,
      width:200,
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardfirstText: {
      fontSize: 22,
      color: '#0A3B2D',
      fontFamily: "DMSerifDisplay-Regular"

    },
    cardsecondText: {
      fontSize: 12,
      marginTop: '4%',
      fontFamily: "Poppins-Regular"


    },
    cardthirdText: {
      fontSize: 12,
      marginTop: '4%',
      fontFamily: "Poppins-Regular"


    },
    headerImage:{},
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0A3B2D' }}>
      <StatusBar backgroundColor={'#0A3B2D'} />
      <View style={{ flexDirection: 'row', padding: 16 }}>

        <HeaderBackButton onPress={() => navigation.goBack()} />
        <View style={{ flex: 0.85, alignItems: 'center', justifyContent: 'space-between' }}>
          <View >
            <Image source={require('../assets/A.png')} style={styles.headerImage} />
          </View>
          <View >
            <Image source={require('../assets/AMANA.png')} style={styles.headerImage} />
          </View>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <Text style={styles.firstText}>Time to set up</Text>
        <Text style={styles.secondText}>Tell us what kind of profile you would like</Text>
        <Card style={[styles.cardContainer, { backgroundColor: '#F0F0F0', borderRadius: 10, margin: 10 }]} >
         
          <View>
            <Image source={require('../assets/Individual.png')} />
          </View>
          <Text style={styles.cardfirstText}>Individual</Text>
          <Text style={styles.cardsecondText}>Create a personal account</Text>
        </Card>
        <Card style={[styles.cardContainer, { backgroundColor: '#F0F0F0', borderRadius: 10, margin: 10 }]} >
          <View>
            <Image source={require('../assets/Organization.png')} />
          </View>
          <Text style={styles.cardfirstText}>Organization</Text>
          <Text style={styles.cardsecondText}>Create a public account for your</Text>
          <Text style={styles.cardthirdText}>organization</Text>

        </Card>
      </View>
    </SafeAreaView >
  );
}

export default WhoAreYou;
