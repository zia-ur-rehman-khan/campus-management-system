import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import EditIcon from 'react-native-vector-icons/AntDesign';
import style from '../../../MyDrawer/CompanyProfile/style';
import SaveIcon from 'react-native-vector-icons/AntDesign';
import CancelIcon from 'react-native-vector-icons/MaterialIcons';

const EditButton = ({editBtn}) => {
  return (
    <TouchableOpacity onPress={editBtn}>
      <View style={style.allBtn}>
        <EditIcon name="edit" size={25} color="#b3b3b3" />
      </View>
      <Text style={style.allBtnTxt}>Edit</Text>
    </TouchableOpacity>
  );
};

const SaveButton = ({saveBtn}) => {
  return (
    <TouchableOpacity onPress={saveBtn}>
      <View style={style.allBtn}>
        <SaveIcon name="save" size={25} color="#b3b3b3" />
      </View>
      <Text style={style.allBtnTxt}>Save</Text>
    </TouchableOpacity>
  );
};

const CancelButton = ({cancelBtn}) => {
  return (
    <TouchableOpacity onPress={cancelBtn}>
      <View style={style.allBtn}>
        <CancelIcon name="cancel" size={25} color="#b3b3b3" />
      </View>
      <Text style={style.allBtnTxt}>Cancel</Text>
    </TouchableOpacity>
  );
};

export {EditButton, SaveButton, CancelButton};
