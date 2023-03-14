import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, TouchableOpacity} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';
import {Card} from '@rneui/themed';
import {color} from '@rneui/base';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function WhoAreYou(props) {
  const {navigation} = props;
  const styles = StyleSheet.create({
    container: {},
    firstText: {
      fontSize: 24,
      color: '#0A3B2D',
      marginTop: '6%',
      fontFamily: 'DMSerifDisplay-Regular',
    },
    secondText: {
      fontSize: 14,
      color: 'black',
      marginTop: '2%',
      fontFamily: 'Poppins-Regular',
    },
    cardContainer: {
      backgroundColor: 'red',
      height: 200,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardfirstText: {
      fontSize: 22,
      color: '#0A3B2D',
      marginTop: '8%',
      fontFamily: 'DMSerifDisplay-Regular',
    },
    cardsecondfirstText: {
      fontSize: 22,
      color: '#0A3B2D',
      marginTop: '1%',
      fontFamily: 'DMSerifDisplay-Regular',
    },
    cardsecondText: {
      fontSize: 12,
      marginTop: '4%',
      fontFamily: 'Poppins-Regular',
    },
    cardthirdText: {
      fontSize: 12,
      marginTop: '-1%',
      fontFamily: 'Poppins-Regular',
    },
    headerImage: {},
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0A3B2D'}}>
      <StatusBar backgroundColor={'#0A3B2D'} />
      <View style={{flexDirection: 'row', padding: 16}}>
        <HeaderBackButton
          onPress={() => navigation.goBack()}
          style={{backgroundColor: 'white', borderRadius: 20}}
        />
        <View
          style={{
            flex: 0.85,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Image
              source={require('../assets/A.png')}
              justifyContent="center"
            />
            <Image
              source={require('../assets/AMANA.png')}
              justifyContent="center"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F2F2F4',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <Text style={styles.firstText}>Time to set up</Text>
        <Text style={styles.secondText}>
          Tell us what kind of profile you would like
        </Text>

        <Card
          containerStyle={{
            backgroundColor: '#E7E7E0',
            justifyContent: 'center',
            width: '67%',
            height: '38%',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('signupFirstIndiv')}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../assets/Individual.png')} />

              <Text style={styles.cardfirstText}>Individual</Text>
              <Text style={styles.cardsecondText}>
                Create a personal account
              </Text>
            </View>
          </TouchableOpacity>
        </Card>
        <Card
          containerStyle={{
            backgroundColor: '#E7E7E0',
            justifyContent: 'center',
            width: '67%',
            height: '38%',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('authentificationScreen')}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '1%',
              }}>
              <Image source={require('../assets/Organization.png')} />

              <Text style={styles.cardsecondfirstText}>Organization</Text>
              <Text style={styles.cardsecondText}>
                Create a public account for your
              </Text>
              <Text style={styles.cardthirdText}>organization</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    </SafeAreaView>
  );
}

export default WhoAreYou;
