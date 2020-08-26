import React,{useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { GetTaxons } from './actions';
import Accordion from 'react-native-collapsible/Accordion';
import { ScrollView } from 'react-native-gesture-handler';
import { Images, Colors } from '../utils';
import Heading from '../../Components/Heading';
import Spinner from 'react-native-loading-spinner-overlay';

const Products = (props) =>  {
  return (
    <Text>Products</Text>
  );
}

const mapStateToProps = state => {
  const {loading, error, taxons} = state.homeState;
  return {
    loading,
    error,
    taxons,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  getTaxons: () => {
    dispatch(GetTaxons());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
