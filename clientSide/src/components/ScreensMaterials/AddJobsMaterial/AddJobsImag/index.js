import React, {useState} from 'react';
import {View, Image} from 'react-native';
import style from '../../../MyDrawer/AddJobs/style';

const AddJobsImag = () => {
  const [img] = useState(require('../../../../../assets/addjob.jpg'));
  return (
    <View style={style.imgContainer}>
      <Image source={img} style={style.img} />
    </View>
  );
};

export default AddJobsImag;
