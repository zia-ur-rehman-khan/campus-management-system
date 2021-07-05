import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../MyDrawer/AddJobs/style';

const AddJobsButton = ({handleSubmit, disabled}) => {
  const [BtnText] = useState('Submit');
  return (
    <TouchableOpacity onPress={handleSubmit} disabled={disabled}>
      <View style={style.btnContainer}>
        <Text style={style.btnText}>{BtnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddJobsButton;
