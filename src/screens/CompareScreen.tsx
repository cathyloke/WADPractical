import React, {useState} from 'react';
import {Alert, Text, View, TouchableNativeFeedback} from 'react-native'; 
import RandomNumberWithButton from '../components/RandomNumberWithButton';

const App = ({route, navigation}: any ) => {

    const [number1, setNum1] = useState(0);
    const [number2, setNum2] = useState(0);

    const _onPressButton = (num1:number, num2:number) => {
        if (num1 >= num2)
            Alert.alert('Value One is greater than or equal to Value Two')
        else if(num1 < num2)
            Alert.alert('Value One is smaller than Value Two')
    }
  
    function compareNum() {
      _onPressButton(number1, number2);
    }

    return(
        <View>
            <RandomNumberWithButton />
            <RandomNumberWithButton />

            <TouchableNativeFeedback onPress={compareNum}>
                <Text style={{
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'Anta-Regular',
                    fontSize: 20,
                    marginTop: 30,
                    backgroundColor: '#052c5c',
                }}>COMPARE</Text>
            </TouchableNativeFeedback>

        </View>
    );
}

export default App;


