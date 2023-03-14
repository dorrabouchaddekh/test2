import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {Button} from '@react-native-material/core';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, ScrollView} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';

import PhoneInput from 'react-native-phone-number-input';
import {TouchableOpacity} from 'react-native-gesture-handler';

function SignupFirstIndiv(props) {
  const {navigation} = props;
  const [text, onChangeText] = React.useState('');

  const [phoneNumber, setPhoneNumber] = React.useState('');
  const phoneInput = React.useRef(null);

  const styles = StyleSheet.create({
    container: {},
    firstText: {
      fontSize: 24,
      color: '#0A3B2D',
      marginTop: '1%',
      fontFamily: 'DMSerifDisplay-Regular',
      textAlign: 'center',
      marginBottom: '6%',
    },
    pageNumber: {
      fontSize: 16,
      color: 'grey',
      marginTop: '2%',
      fontFamily: 'Poppins-Regular',
    },
    
    boldText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#0A3B2D',
    },
    contactDetailsText: {
      fontSize: 15,
      color: '#232222',
      fontFamily: 'Poppins-Regular',
      textAlign: 'left',
      marginLeft: '4%',
    },
    inputText: {
      backgroundColor: 'white',
      height: 50,
      borderRadius: 10,
      margin: '4%',
      padding: 10,
    },
    phoneViewContainer: {
      margin: '4%',
    },
    passwordStrengthRules: {
      fontSize: 10,
      color: 'grey',
      fontFamily: 'Poppins-Regular',
      textAlign: 'left',
      marginLeft: '4%',
    },
    buttonNext: {
      margin: '4%',
      backgroundColor: '#E7E7E0',
      marginBottom: 40,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
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
              source={require('../../assets/A.png')}
              style={styles.headerImage}
            />
          </View>
          <View>
            <Image
              source={require('../../assets/AMANA.png')}
              style={styles.headerImage}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F2F2F4',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        
          <Text style={{marginTop: '4%', textAlign: 'center'}}>
            <Text style={styles.boldText}>1 </Text>
            <Text style={styles.pageNumber}>/ 4</Text>
          </Text>
          
          <Text style={styles.firstText}>Sign up</Text>

          
          <ScrollView>
          <Text style={styles.contactDetailsText}>Full Name</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={onChangeText}
            value={text}
            placeholder="Your full name"
          />

          <Text style={styles.contactDetailsText}>Email</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={onChangeText}
            value={text}
            keyboardType= 'email-address'
            placeholder="email@gmail.com"
          />

          <Text style={styles.contactDetailsText}>Phone number</Text>
          <View style={styles.phoneViewContainer}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              containerStyle={{
                backgroundColor: 'white',
                height: 50,
                borderRadius: 10,
                width: '100%',
              }}
              textContainerStyle={{
                fontSize: 15,
                backgroundColor: 'white',
                paddingVertical: 0,
                borderRadius: 10,
              }}
              onChangeFormattedText={number => {
                setPhoneNumber(number);
              }}
              defaultCode="TN"
              layout="first"
            />
          </View>

          <Text style={styles.contactDetailsText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputText}
            placeholder="*******"
          />

          <Text style={styles.passwordStrengthRules} marginTop="-2.5%">
            {`\u2022 Upper and lower case letters`}
          </Text>

          <Text style={styles.passwordStrengthRules}>
            {`\u2022 Between 8 and 64 caracters`}
          </Text>

          <Text style={styles.passwordStrengthRules} marginBottom="4%">
            {`\u2022 Contains a number and symbol`}
          </Text>

          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => navigation.navigate('signupSecondIndiv')}>
            <Text tintColor="#A8A89D">Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default SignupFirstIndiv;
