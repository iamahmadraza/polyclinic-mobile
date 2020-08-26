import React,{useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { ScrollView } from 'react-native-gesture-handler';
import { Images, Colors } from '../utils';
import Heading from '../../Components/Heading';
import Spinner from 'react-native-loading-spinner-overlay';

//Style imports
import styles from './styles';

//Redux imports
import { connect } from 'react-redux';
import { GetTaxons } from './actions';
import { getProducts } from '../Products/actions';

const Home = (props) =>  {
  const [activeSec, secActiveSections] = useState([]);
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    props.getTaxons();
  }, []);

  useEffect(() => {
    setCategory(props.taxons);
  }, [props.taxons])

  _renderHeader = (section, index, isActive) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <Image style={isActive ?  { ...styles.headerIcon, transform: [{ rotate: '90deg'}]} : styles.headerIcon} source={Images.arrow} resizeMode="contain" />
      </View>
    );
  };

  _renderContent = section => {
    return (
      section.content.map(s => 
        <View key={s.id} style={styles.content}>
          {this._renderSubCategory(s, section.title)}
        </View>
      )
    );
  };

  _renderSubCategory = (section, title) => {
    return (
      <TouchableOpacity 
        style={styles.subCategory} 
        activeOpacity={0.7}
        onPress={() => {
          var subCat = section.name.split(' ').join('-');
          let path = `${title}/${subCat}`;
          console.log(path);
          props.getProducts(path.toLowerCase());
          // props.navigation.navigate('Products')
        }}
      >
         <Text style={styles.subCategoryText}>{section.name}</Text>
         <Image style={styles.headerIcon} source={Images.arrowBlack} resizeMode="contain" />
      </TouchableOpacity>
    );
  };

  _updateSections = activeSections => {
    secActiveSections(activeSections);
  };

  return (
    <ScrollView  containerStyle={styles.container}>
        <Spinner
          visible={props.loading}
          textContent={'Loading...'}
          // textStyle={styles.spinnerTextStyle}
        />
      <Heading label={"Category"} />
      <Accordion
        containerStyle={styles.container}
        underlayColor={Colors.appColor}
        sections={category}
        activeSections={activeSec}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    </ScrollView>
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
  getProducts: path => {
    dispatch(getProducts(path))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
