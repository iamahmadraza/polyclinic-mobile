import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Images} from '../Utils';
import Container from '../../Components/Container';
import styles from './styles';
import {connect} from 'react-redux';

const Home = (props) => {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
