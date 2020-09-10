import React, {useState} from 'react';
import {View, ScrollView, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {setRole} from './actions';
import {Role} from '../Utils/Constants';
import Container from '../../Components/Container';
import AppButton from '../../Components/AppButton';

const Appointment = (props) => {
  const [selectedAppointMent, setSelectedAppointment] = useState('');
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const Item = ({item}) => {
    var textStyle =
      item.id === selectedAppointMent
        ? styles.itemTextSelected
        : styles.itemText;
    var containerStyle =
      item.id === selectedAppointMent ? styles.itemSelected : styles.item;
    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={() => {
          setSelectedAppointment(item.id);
        }}>
        <Text style={textStyle}>Schedual Day: {'Monday'}</Text>
        <Text style={textStyle}>Time From: {'04:00 PM'}</Text>
        <Text style={textStyle}>Time To: {'05:00 PM'}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => <Item item={item} />;
  return (
    <Container>
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.contactContainer}>
          <Text style={styles.contactLabel}>Available Contact Number</Text>
          <Text style={styles.contactText}>0333-7860123</Text>
          <Text style={styles.helpLineText}>
            Helpline Timings: 9AM-9PM, 24/7
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.contactLabel}>Select An Appointment</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <AppButton
            onPress={() => {}}
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
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  setRole: (data) => {
    dispatch(setRole(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
