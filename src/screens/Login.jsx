import React, { useState } from 'react';
import Input from '../components/Input';
import { AuthStore } from '../store/auth';
import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import { StyleSheet } from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const onSubmit = async () => {
  //   await AuthStore.login({email: email, password: password});
  //   // if (AuthStore.state.isAuthenticated) {
  //   //   navigation.navigate('Tab');
  //   // }    
  // };

  const onSubmit = async () => {
    //AuthStore.state.isAuthenticated = true;
    AuthStore.login({ email: email, password: password });

  };
  return (
    <View style={styles.ScreenContainer}>

      <ScrollView style={styles.form}>
        <Text
          style={styles.ScreenTitle}>
          Sign in
        </Text>

        <View style={styles.InputContainerComponent}>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
            selectionColor={COLORS.primaryLightGreyHex}
          />
        </View>
        <View style={styles.InputContainerComponent}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
            secureTextEntry={true}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
            selectionColor={COLORS.primaryLightGreyHex}
          />
        </View>

        <Pressable
          style={{ alignSelf: 'flex-end', marginTop: 10, marginBottom: 20 }}
          onPress={() => navigation.navigate('forgotpass')}>
          <Text
            style={{
              color: 'gray',
              textDecorationColor: 'gray',
              textDecorationLine: 'underline',
            }}>
            Forgot Password?
          </Text>
        </Pressable>

        <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
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
          <Text style={{ textAlign: 'left', color: 'gray',}} >Don't have an account?</Text>
          <Pressable
            style={{ marginLeft: 5 }}
            onPress={() => navigation.navigate('signup')}>
            <Text
              style={{
                textAlign: 'right',
                color: 'gray',
                textDecorationColor: 'gray',
                textDecorationLine: 'underline',
              }}>
              Sign Up Now
            </Text>
          </Pressable>
        </View> 


      </ScrollView>
    </View>
  );
};

export default Login;

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },

})