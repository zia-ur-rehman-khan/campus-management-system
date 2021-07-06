import React, { useState } from 'react';
import { View, Image } from 'react-native';
import style from '../../../Login/style';

const LoginImgOne = () => {
  const [myImg] = useState(require('../../../../../assets/cover.jpg'));
  return (
    <View style={style.coverImgCon}>
      <Image source={myImg} style={style.coverImg} />
    </View>
  );
};

const LoginImgTwo = () => {
  const [img] = useState(require('../../../../../assets/login.jpg'));
  return (
    <View style={style.imgContainer}>
      <Image source={img} style={style.img} />
    </View>
  );
};

export { LoginImgOne, LoginImgTwo };
