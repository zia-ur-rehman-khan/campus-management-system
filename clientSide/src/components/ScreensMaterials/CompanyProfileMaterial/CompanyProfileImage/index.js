import React, {useState} from 'react';
import {View, Image} from 'react-native';
import style from '../../../MyDrawer/CompanyProfile/style';

const CompanyCoverImg = () => {
  const [myCoverImg] = useState(require('../../../../../assets/mycover.jpg'));
  return (
    <View>
      <View style={style.coverImgContainer}>
        <Image source={myCoverImg} style={style.coverImg} />
      </View>
    </View>
  );
};

const CompanyImg = () => {
  const [myImg] = useState(require('../../../../../assets/company.jpg'));
  return (
    <View style={style.imgContainer}>
      <Image source={myImg} style={style.img} />
    </View>
  );
};

export {CompanyImg, CompanyCoverImg};
