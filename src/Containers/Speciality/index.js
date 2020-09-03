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
    description: 'Ent....',
  },
  {
    id: '2',
    title: 'Surgen',
    description: 'Surgen....',
  },
  {
    id: '3',
    title: 'Physician',
    description: 'Physician....',
  },
  {
    id: '4',
    title: 'General',
    description: 'General....',
  },
];

const Item = (data) => {
  return (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => data.props.navigation.navigate('DoctorList')}>
      <View style={styles.listInnerContainer}>
        <Image
          style={styles.listIcon}
          source={Images.clinicalProcedure}
          resizeMode="contain"
        />
        <View style={styles.listTextContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </View>
      <Image
        style={styles.listArrowIcon}
        source={Images.arrow}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const Speciality = (props) => {
  const renderItem = ({item}) => (
    <Item title={item.title} description={item.description} props={props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
