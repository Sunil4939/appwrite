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
import { GetUserApi, LoginApi, LogoutApi } from '../../redux/actions/authActions';


const Login = ({ navigation, LoginApi }) => {
  const [loading, setLoading] = useState(false)


  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

  return (
    <MainView scroll={true}>
      <View style={styles.innnerContainer}>
        <Text style={styles.Welcome}>Login</Text>

        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: null,
            password: null,
          }}
          onSubmit={(values) => {
            // console.log("value : ", values)
            LoginApi(values, (data) => setLoading(data))
            // LogoutApi()
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
                placeholder="Enter your email"
                onChangeText={handleChange('email')}
                value={values.email}
                keyboardType="email-address"
                onBlur={handleBlur("email")}
                error={touched.email && errors.email}
              />
              <PasswordInput
                placeholder={'Enter Password'}
                onChangeText={handleChange('password')}
                value={values.password}
                onBlur={handleBlur("password")}
                error={touched.password && errors.password}
              />

              <Button1 loading={loading} buttonStyle={styles.btn} onPress={handleSubmit} >Login</Button1>

            </>
          )}
        </Formik>

      </View>

      <View style={styles.row1}>
        <Text style={styles.text}>Don't have  an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.blueText}> SignUp</Text>
        </TouchableOpacity>
      </View>
    </MainView>
  );
};
const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  LoginApi
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
