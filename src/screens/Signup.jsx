import React, {useState, useEffect} from 'react';
import {
  Text,
  Pressable,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import Input from '../components/Input';
import { StyleSheet } from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

import {AuthStore} from '../store/auth';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    AuthStore.register({
      email: email,
      password: password,
      name: name,
    });
  };

  return (
    <View style={styles.ScreenContainer}>
   
      <ScrollView style={styles.form}>
        <Text
          style={styles.ScreenTitle}>
          Create an account
        </Text>
        <View style={styles.InputContainerComponent}>

        <TextInput
          text={name}
          setText={setName}
          placeholder="Enter name"
          placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
            selectionColor={COLORS.primaryLightGreyHex}
        />

        </View>
        <View style={styles.InputContainerComponent}>
        <TextInput
          text={email}
          setText={setEmail}
          placeholder="Enter email"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          style={styles.TextInputContainer}
          selectionColor={COLORS.primaryLightGreyHex}
       
        />

        </View>
        <View style={styles.InputContainerComponent}> 
        <TextInput
          password={true}
          text={password}
          setText={setPassword}
          placeholder="Enter password"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          style={styles.TextInputContainer}
          selectionColor={COLORS.primaryLightGreyHex}
        />
        </View>
        
        <TouchableOpacity
          style={{...styles.btn, marginTop: 20}}
          onPress={() => {
            // Register();
            // navigation.navigate('Dashboard', {parama: [], auth: true});
            onSubmit();
          }}>
          <Text >Submit</Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20
          }}>
          <Text style={{ textAlign: 'left', color: 'gray',}} >Already have an account?</Text>
          <Pressable
            style={{ marginLeft: 5 }}
            onPress={() => navigation.navigate('login')}>
            <Text
              style={{
                textAlign: 'right',
                color: 'gray',
                textDecorationColor: 'gray',
                textDecorationLine: 'underline',
              }}>
              Login
            </Text>
          </Pressable>
        </View> 

      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({

  form: {
    width: '100%',
    //backgroundColor: '#eee',
    backgroundColor: COLORS.primaryBlackHex,
    padding: 10,
    flex: 1,
    //alignContent: 'center'
  },

  InputContainerComponent: {
    margin: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    // alignItems: 'center',
    paddingLeft: SPACING.space_20,

  },

  TextInputContainer: {
    // flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },

  btn: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: 15,
    width: 200,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: 20,
  },

  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    //paddingLeft: SPACING.space_30,
    alignSelf: 'center',
    paddingVertical: SPACING.space_30
  },

  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 100
  },

})