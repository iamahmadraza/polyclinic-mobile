import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {bookAppointment} from './actions';
import Container from '../../Components/Container';
import AppButton from '../../Components/AppButton';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

const Appointment = (props) => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState('');

  useEffect(() => {
    const {appointments} = props.route.params;
    setAppointmentsList(appointments);
  }, []);

  const Item = ({item}) => {
    var textStyle =
      item._id === selectedAppointment
        ? styles.itemTextSelected
        : styles.itemText;
    var containerStyle =
      item._id === selectedAppointment ? styles.itemSelected : styles.item;
    var day = moment(item.day, 'DD-MM-YYYY').format('dddd');

    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={() => {
          setSelectedAppointment(item._id);
        }}>
        <Text style={textStyle}>Schedual Day: {day}</Text>
        <Text style={textStyle}>Time From: {item.availableFrom}</Text>
        <Text style={textStyle}>Time To: {item.availableTo}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => <Item item={item} />;

  const bookAppointmentFunc = async () => {
    console.log(selectedAppointment, 'jsjksjks');
    if (selectedAppointment !== '') {
      const {docId} = props.route.params;
      let userString = await AsyncStorage.getItem('user');
      let user = JSON.parse(userString);

      const body = {
        doctor: docId,
        patient: user._id,
        appointment: selectedAppointment,
      };

      props.bookAppointment(body, props.navigation);
    } else {
      Toast.showWithGravity(
        'Please select an appointment!',
        Toast.LONG,
        Toast.TOP,
      );
    }
  };

  return (
    <Container>
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.contactContainer}>
          <Text style={styles.contactLabel}>Available Contact Number</Text>
          <Text style={styles.contactText}>{props.route.params.phone}</Text>
          <Text style={styles.helpLineText}>
            Helpline Timings: 9AM-9PM, 24/7
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.contactLabel}>Select An Appointment</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={appointmentsList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <AppButton
            loading={props.loading}
            onPress={() => bookAppointmentFunc()}
            buttonMainContainerStyles={styles.buttonCotainer}
            label={'Book Appointment Now'}
            buttonStyles={styles.buttonStyles}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {loading} = state.appointmentState;
  return {
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  bookAppointment: (data, navigation) => {
    dispatch(bookAppointment(data, navigation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
