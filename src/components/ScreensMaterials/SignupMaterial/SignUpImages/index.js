import React, {useState} from 'react';
import {View, Image} from 'react-native';
import style from '../../../SignUp/style';

const SignUpImgOne = () => {
  const [myImg] = useState(require('../../../../../assets/live.jpg'));
  return (
    <View style={style.coverImgCon}>
      <Image source={myImg} style={style.coverImg} />
    </View>
  );
};

const SignUpImgTwo = () => {
  const [img] = useState(require('../../../../../assets/signup.jpeg'));
  return (
    <View style={style.imgContainer}>
      <Image source={img} style={style.img} />
    </View>
  );
};

export {SignUpImgOne, SignUpImgTwo};
