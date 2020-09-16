import React, {useEffect, useState} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import Container from '../../Components/Container';
import {Images} from '../Utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getDoctor} from './actions';
import Toast from 'react-native-simple-toast';

const DoctorList = (props) => {
  useEffect(() => {
    const {speciality} = props.route.params;
    props.getDoctor(speciality);
  }, []);

  const onBookAppointment = (data) => {
    if (data.doctorAvailability.length > 0) {
      props.navigation.navigate('Appointment', {
        docId: data._id,
        phone: data.phone,
        appointments: data.doctorAvailability,
      });
    } else {
      Toast.showWithGravity('No Availbility', Toast.SHORT, Toast.TOP);
    }
  };

  const Item = ({item}) => {
    console.log(item);
    return (
      <View style={styles.itemContainer}>
        <View style={styles.listInnerContainer}>
          <Image
            style={styles.listIcon}
            source={Images.doctor}
            resizeMode="contain"
          />
          <View style={styles.listTextContainer}>
            <Text style={styles.name}>
              {item.username ? item.username : 'Dummy Name'}
            </Text>
            <Text style={styles.pmdc}>PMDC License: {item.PMDC}</Text>
            <Text style={styles.status}>{item.status ? item.status : ''}</Text>
          </View>
        </View>
        <Text style={styles.label}>Specialities:</Text>
        <Text style={styles.specialities}>
          {item.doctorSpecialities.map((s, i) => (
            <Text>
              {s.name}
              {i < item.doctorSpecialities.length - 1 && ', '}
            </Text>
          ))}
        </Text>
        <View style={styles.contactContainer}>
          <View>
            <Text style={styles.label}>Contact Number</Text>
            <Text style={styles.phoneNumber}>{item.phone}</Text>
          </View>
          <View>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.location}>{item.city}, Pakistan</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.buttonCotainer} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Consult Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCotainer}
            activeOpacity={0.8}
            onPress={() => onBookAppointment(item)}>
            <Text style={styles.buttonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => <Item item={item} />;

  return (
    <Container>
      <FlatList
        ListEmptyComponent={() => (
          <Text style={styles.noDataFound}>
            No doctor available in this speciality
          </Text>
        )}
        data={props.doctors}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {loading, doctors} = state.doctorListState;
  return {
    loading,
    doctors,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getDoctor: (query) => {
    dispatch(getDoctor(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
