import React, {useEffect, useState} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import Container from '../../Components/Container';
import {Images} from '../Utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DATA = [
  {
    id: '1',
    title: 'Ent',
    Name: 'Ahmad Raza',
    status: 'Online',
    description: 'Ent....',
    specialities: ['General', 'Ent'],
  },
  {
    id: '2',
    title: 'Surgen',
    Name: 'Muneeb Zia',
    status: 'Online',
    description: 'Surgen....',
    specialities: ['General', 'Sugren'],
  },
  {
    id: '3',
    title: 'Physician',
    Name: 'Ifrahim Afzal',
    status: 'Offline',
    description: 'Physician....',
    specialities: ['Physician', 'Sugren'],
  },
  {
    id: '4',
    title: 'General',
    Name: 'Shajee Gardezi',
    status: 'Online',
    description: 'General....',
    specialities: ['General', 'Sugren'],
  },
];

const Item = ({item, navigation}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.listContainer}>
        <View>
          <View style={styles.listInnerContainer}>
            <Image
              style={styles.listIcon}
              source={Images.doctor}
              resizeMode="contain"
            />
            <View style={styles.listTextContainer}>
              <Text style={styles.name}>{item.Name}</Text>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </View>
          <Text style={styles.label}>Specialities:</Text>
          <Text style={styles.specialities}>
            {item.specialities.map((s, i) => (
              <Text>
                {s}
                {i < item.specialities.length - 1 && ', '}
              </Text>
            ))}
          </Text>
        </View>
        {/* <Image
          style={styles.listArrowIcon}
          source={Images.arrow}
          resizeMode="contain"
        /> */}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.buttonCotainer} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Consult Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCotainer}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('OffAppointment')}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DoctorList = (props) => {
  const renderItem = ({item}) => (
    <Item item={item} navigation={props.navigation} />
  );

  return (
    <Container>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
