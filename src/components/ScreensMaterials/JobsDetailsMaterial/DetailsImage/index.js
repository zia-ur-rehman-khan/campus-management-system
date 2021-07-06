import React, {useState} from 'react';
import {View, Image} from 'react-native';
import style from '../../../JobsDetails/style';

const DetailsImage = () => {
  const [img] = useState(require('../../../../../assets/detail.jpg'));
  return (
    <View style={style.imgContainer}>
      <Image source={img} style={style.img} />
    </View>
  );
};

export default DetailsImage;
