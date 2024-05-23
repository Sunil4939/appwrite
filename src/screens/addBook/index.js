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
import { CreateBookDataApi, UpdateBookDataApi } from '../../redux/actions/bookAction';


const AddBook = ({ navigation, CreateBookDataApi, userData, route, UpdateBookDataApi }) => {
  const [loading, setLoading] = useState(false)

  navigation.setOptions({
    title: route?.params?.type == "edit" ? 'Edit Book' : 'Add Book',
   
  });


  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup
      .string()
      .required('Description is required'),
  })

  return (
    <MainView scroll={true}>
      <View style={styles.innnerContainer}>

        <Formik
          validationSchema={validationSchema}
          initialValues={{
            uid: userData?.$id,
            name: route?.params?.data?.name || null,
            description: route?.params?.data?.description || null,
            isCompleted: false
          }}
          onSubmit={(values) => {
            if(route?.params?.type == "edit"){
              UpdateBookDataApi(values, route?.params?.data?.$id, navigation, (data) => setLoading(data))
            }else{
              CreateBookDataApi(values, navigation, (data) => setLoading(data))
            }
            // console.log("value : ", values)
            
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
                placeholder="Description"
                onChangeText={handleChange('description')}
                value={values.description}
                onBlur={handleBlur("description")}
                error={touched.description && errors.description}
                multiline={true}
                numberOfLines={8}

              />

              <Button1 loading={loading} buttonStyle={styles.btn} onPress={handleSubmit} >Save</Button1>

            </>
          )}
        </Formik>

      </View>
    </MainView>
  );
};
const mapStateToProps = state => ({
  userData: state.auth.userData
});

const mapDispatchToProps = {
  CreateBookDataApi,
  UpdateBookDataApi
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
