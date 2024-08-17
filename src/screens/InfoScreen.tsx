import React from "react";
import { View, TouchableNativeFeedback, Image, Alert } from "react-native";
import PagerView from 'react-native-pager-view';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const data = [
  {
    title: 'UTAR',
    description: 'Universiti Tunku Abdul Rahman',
    logo: require('../assets/images/UTAR_logo.jpg'),
    buttonIcon: <MaterialCommunityIcons name="information" size={55} color="white"/>
  },
  {
    title: 'LKC FES',
    description: 'Lee Kong Chian Faculty of Engineering & Science',
    logo: require('../assets/images/LKC_FES_logo.jpg'),
    buttonIcon: <MaterialCommunityIcons name="information" size={55} color="white"/>
  }
]

function _onPressButton(index:any) {
  Alert.alert(data[index].title)
}

function _onLongPressButton(index:any)  {
  Alert.alert(data[index].description)
}

const App = () => {
  return(
    <PagerView style={{flex:1}} initialPage={0} useNext={false}>
      {
        data.map((item,index)=>{
          return(
          <View style= {{
            flex:1,
            backgroundColor: '#99a9bd',
            justifyContent: 'center',}}
            >
            <Image source={item.logo}
              style={{marginTop:20,
                width: 300,
                height: 200,
                alignSelf:'center',
              }}/>
                <TouchableNativeFeedback
                  onPress = {_onPressButton(index)}
                  onLongPress = {_onLongPressButton(index)}
                >
                  <View style= {{
                    backgroundColor: '#0e1957',
                    alignItems:"center",
                    padding: 20,
                    marginLeft:80, 
                    marginRight:80,
                    marginTop:20, 
                    borderRadius:10
                  }}>
                  {item.buttonIcon}
                  </View> 
                </TouchableNativeFeedback>
              </View>

          )})
      }
    </PagerView>
  )
}

export default App;
