import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Images} from '../Utils';
import Container from '../../Components/Container';
import {getSpecialities} from '../DoctorHome/actions';
import styles from './styles';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const Home = (props) => {
  useEffect(() => {
    props.getSpecialities();
  }, []);

  const renderCard = (label, source, route) => {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate(route)}>
        <Image style={styles.cardLogo} source={source} resizeMode="contain" />
        <Text style={styles.cardText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <TouchableOpacity
        style={styles.logoutCotainer}
        onPress={() => {
          AsyncStorage.removeItem('accessToken');
          AsyncStorage.removeItem('role');
          AsyncStorage.removeItem('user');
          props.navigation.reset({
            routes: [{name: 'Login'}],
          });
        }}
        activeOpacity={0.6}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={styles.container}
        alwaysBounceVertical={false}>
        <View style={styles.cardContainer}>
          {renderCard('Book Appointment', Images.bookAppointment, 'Speciality')}
          {renderCard('Online Doctor', Images.onlineBooking, '')}
        </View>
        <View style={styles.cardContainer}>
          {renderCard('Book Lab Test', Images.bookLabTest, '')}
          {renderCard('Clinical Procedure', Images.clinicalProcedure, '')}
        </View>
        <View style={styles.cardContainer}>
          {renderCard('CT Scan MRI', Images.medicalHistory, '')}
          {renderCard('Dentistry', Images.searchDisease, '')}
        </View>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state) => {
  // const {loading, error, taxons} = state.homeState;
  return {
    // loading,
    // error,
    // taxons,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getSpecialities: () => {
    dispatch(getSpecialities());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
