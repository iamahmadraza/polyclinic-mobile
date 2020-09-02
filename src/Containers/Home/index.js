import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Images} from '../utils';
import Container from '../../Components/Container';

//Style imports
import styles from './styles';

//Redux imports
import {connect} from 'react-redux';
import {GetTaxons} from './actions';

const Home = (props) => {
  const renderCard = (label, source) => {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate('Speciality')}>
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
          {renderCard('Book Appointment', Images.bookAppointment)}
          {renderCard('Online Booking', Images.onlineBooking)}
        </View>
        <View style={styles.cardContainer}>
          {renderCard('Book Lab Test', Images.bookLabTest)}
          {renderCard('Clinical Procedure', Images.clinicalProcedure)}
        </View>
        <View style={styles.cardContainer}>
          {renderCard('Medical History', Images.medicalHistory)}
          {renderCard('Search Disease', Images.searchDisease)}
        </View>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {loading, error, taxons} = state.homeState;
  return {
    loading,
    error,
    taxons,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getTaxons: () => {
    dispatch(GetTaxons());
  },
  getProducts: (path) => {
    dispatch(getProducts(path));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
