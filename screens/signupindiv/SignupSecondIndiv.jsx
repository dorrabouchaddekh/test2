import React, { useState }  from 'react';
import {View, Text, StyleSheet, Image, TextInput, DatePickerAndroid, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, ScrollView} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';

import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


function SignupSecondIndiv(props) {
  const {navigation} = props;
  const [text, onChangeText] = React.useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateString, setDateString] = useState('');

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
      setDateString(
        date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'numeric',
          year: '2-digit',
        })
      );
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };



  //STYLES
  const styles = StyleSheet.create({
    container: {},
    firstText: {
      fontSize: 24,
      color: '#0A3B2D',
      marginTop: '1%',
      fontFamily: 'DMSerifDisplay-Regular',
      textAlign: 'center',
      marginBottom: '3%',
    },
    pageNumber: {
      fontSize: 16,
      color: 'grey',
      marginTop: '2%',
      fontFamily: 'Poppins-Regular',
    },
    secondText: {
      fontSize: 14,
      color: '#232222',
      marginRight: '11%',
      marginLeft: '11%',
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
      marginBottom: '4%',
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
    buttonNext: {
      margin: '4%',
      backgroundColor: '#E7E7E0',
      marginBottom: 40,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
    },
    dateContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    calendarIcon: {
      position: 'absolute',
      top: 12,
      right: 12,
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
          <Text style={styles.boldText}>2 </Text>
          <Text style={styles.pageNumber}>/ 4</Text>
        </Text>
        <Text style={styles.firstText}>Basic information</Text>

        <Text style={styles.secondText}>
          Lorem ipsum dolor sit amet, consectetur eiusmod adipiscing elit, sed
          do
        </Text>

        <ScrollView>
          <Text style={styles.contactDetailsText}>Date of birth</Text>
          <View style={styles.container}>
      <TouchableOpacity style={styles.calendarIcon} onPress={showDatePickerModal}>
        <Icon name='calendar' size={20} color='red' />
      </TouchableOpacity>
      <TextInput
        style={styles.inputText}
        value={dateString}
        placeholder="DD/MM/YY"
        editable={false}
      />
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
          onChange={handleDateChange}
        />
      )}
    </View>


          <Text style={styles.contactDetailsText}>Gender</Text>

          <Text style={styles.contactDetailsText}>Your social media links</Text>
          
          <Text style={styles.contactDetailsText}>Profile picture</Text>

          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => navigation.navigate('whoAreYou')}>
            <Text tintColor="#A8A89D">Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default SignupSecondIndiv;
