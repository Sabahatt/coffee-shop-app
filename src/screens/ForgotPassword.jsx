import React, { useState } from 'react';
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

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
      <View style={styles.ScreenContainer}>

          <ScrollView style={styles.form}>
              <Text
                  style={styles.ScreenTitle}>
                  Forgot Your Password?
              </Text>

              <Text
                  style={{
                      fontSize: FONTSIZE.size_16,
                      fontFamily: FONTFAMILY.poppins_regular,
                      color: COLORS.secondaryLightGreyHex,
                      textAlign: 'left',
                      marginBottom: 20
                  }}>
                  Confirm your email to recieve recovery instructions.
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

              <TouchableOpacity style={{ ...styles.btn, marginTop: 20 }} onPress={() => navigation.navigate('login')}>
                  <Text >Reset Password</Text>
              </TouchableOpacity>
          </ScrollView>
      </View>
  );
};

export default ForgotPassword;

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