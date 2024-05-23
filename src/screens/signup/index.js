import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { icons, images } from '../../constants';
import styles from './styles';
import { connect } from 'react-redux';
import MainView from '../../component/mainView/MainView';
import Button1 from '../../component/button/Button1';
import InputWithIcon from '../../component/input/InputWithIcon';
import { Formik } from 'formik';
import * as yup from 'yup';
import PasswordInput from '../../component/input/PasswordInput';
import { LoginApi, createAccountApi } from '../../redux/actions/authActions';



const Signup = ({ navigation, createAccountApi }) => {
  const [loading, setLoading] = useState(false)

  const validationSchema = yup.object().shape({
    name: yup.string()
      .min(2, ({ min }) => `Name must be at least ${min} characters`)
      .required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  })

  return (
    <MainView scroll={true}>
      <View style={styles.innnerContainer}>
        <Text style={styles.Welcome}>AppWrite</Text>

        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
          }}
          onSubmit={(values) => {
            createAccountApi(values, (data) => setLoading(data))
          }}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <>
              <InputWithIcon
                placeholder="Name"
                onChangeText={handleChange('name')}
                value={values.name}
                onBlur={handleBlur("name")}
                error={touched.name && errors.name}
              />
              <InputWithIcon
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}
                keyboardType="email-address"
                onBlur={handleBlur("email")}
                error={touched.email && errors.email}
              />
              <PasswordInput
                placeholder={'Password'}
                onChangeText={handleChange('password')}
                value={values.password}
                onBlur={handleBlur("password")}
                error={touched.password && errors.password}
              />
              <PasswordInput
                placeholder={'Confirm Password'}
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                onBlur={handleBlur("confirmPassword")}
                error={touched.confirmPassword && errors.confirmPassword}
              />

              <Button1 loading={loading} buttonStyle={styles.btn} onPress={handleSubmit} >SignUp</Button1>

            </>
          )}
        </Formik>

      </View>

      <View style={styles.row1}>
        <Text style={styles.text}>Already have  an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.blueText}> LogIn</Text>
        </TouchableOpacity>
      </View>
    </MainView>
  );
};
const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  createAccountApi
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
