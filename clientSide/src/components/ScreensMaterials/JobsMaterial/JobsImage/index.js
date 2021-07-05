import React, {useState} from 'react';
import {View, Image} from 'react-native';
import style from '../../../MyDrawer/Jobs/style';

const JobImg = () => {
  const [myImg] = useState(require('../../../../../assets/kashif.jpg'));
  return (
    <View style={style.imgContainer}>
      <Image source={myImg} style={style.img} />
    </View>
  );
};

export default JobImg;
