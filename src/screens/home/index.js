import React, { useLayoutEffect, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { COLORS, data, images, SIZES, FONTS, icons, } from '../../constants';
import styles from './styles';
import { connect } from 'react-redux';
import ProductInfo from '../../component/cards/ProductInfo';
import MainView from '../../component/mainView/MainView';
import { DeleteBookDataApi, GetBookListApi } from '../../redux/actions/bookAction';



const Home = ({ navigation, GetBookListApi, getAllBook, DeleteBookDataApi }) => {
  const [loading, setLoading] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)


  useEffect(() => {
      GetBookListApi(data => setLoading(data), navigation)
   
  }, [])


  // console.log('homeData?.new_arrival_dress?.[0] : ', homeData?.new_arrival_dress?.[0]);


  return (
    <MainView modalLoading={modalLoading} loading={loading}>

      <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={() => navigation.navigate('AddBook')}>
        <Text style={styles.btnText}>Add Book</Text>
      </TouchableOpacity>
      {getAllBook?.documents?.[0] &&
        <FlatList
          data={getAllBook?.documents?.[0] ? getAllBook?.documents : []}
          renderItem={({ item, index }) => (
            <ProductInfo
              key={index}
              title={item?.name}
              description={item?.description}
              id={item?.$id}
              editPress={() => navigation.navigate("AddBook", {data: item, type: "edit"})}
              deletePress={() => DeleteBookDataApi(item?.$id)}
              />
          )}

        />
      }


    </MainView>

  );
};

const mapStateToProps = state => ({
  getAllBook: state.book.getAllBook
});

const mapDispatchToProps = {
  GetBookListApi,
  DeleteBookDataApi
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
