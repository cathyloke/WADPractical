import React, {useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native'; 
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
 
const randomNumber = () => {

    const [randomNum, setRandomNum] = useState(0);
  
    const getRandomNumber = (min:number, max:number) => {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); }
  
    function generateNum() {
      setRandomNum(getRandomNumber(0, 10));
    }
  
    return (
      <View>
        <Text
              style={{
                fontSize: 50,
                textAlign: 'center',
                color: '#052c5c',
                fontFamily: 'Anta-Regular',
                marginTop: 30,
              }}>{randomNum}
            <TouchableNativeFeedback onPress={generateNum}>
                <MaterialCommunityIcons name="reload" size={50} /> 
            </TouchableNativeFeedback> 
        </Text>
      </View>
    );
}

export default randomNumber;