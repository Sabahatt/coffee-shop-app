import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

//import {SecondaryColor} from '../styles/theme';

//import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Input = ({placeholder, text, setText, password}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View >
      
      <TextInput
        secureTextEntry={password ? true : false}
        placeholder={placeholder}
       
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={text}
        onChangeText={e => setText(e)}
        //selectionColor={SecondaryColor}
      />
    </View>
  );
};

export default Input;
