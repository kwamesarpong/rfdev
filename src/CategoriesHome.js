import React, { PureComponent } from 'react';
import Expo, { Notifications } from 'expo';
import axios from 'axios'
import { View, Alert, ScrollView, Linking, AsyncStorage, StyleSheet, Dimensions, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
import Header from './Header'
import Categories from './Categories'

class CategoriesHome extends PureComponent {

  state = {
    img: ' ',
    catName: ''
  }

  async componentWillMount(){
    try {
        const cat = await AsyncStorage.getItem('cat')
        const catParsed = JSON.parse(cat)
        this.setState({ catName: catParsed })
    }
    catch(e) {
        console.log(e)
    }
    
  }


handleSelect = (data) => {
  Actions.product({data})
}


 render(){
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <ScrollView>
            <Text style={{paddingTop: 10, paddingBottom: 10, color: 'brown', fontSize: 20, alignSelf: 'center'}}>{this.state.catName}</Text>
            <Categories handleSelect={this.handleSelect}/>
        </ScrollView>
     </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
      margin: 0,
      padding: 0
  },
  wrapper: {
      padding: 0,
      margin: 0,
      height: Dimensions.get('window') * 0.95
  },
  image: {
    height: 250,
  }
})

export default CategoriesHome