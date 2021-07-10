import React, { useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import style from '../../../MyDrawer/CompanyProfile/style';
import { useSelector } from 'react-redux';

const CompanyNameText = ({ edit, myTxt, setAbcd, abcd }) => {
  const currentText = useSelector((state) => state.myLog.LoginData);
  return (
    <View style={style.company}>
      <Text style={style.companyChild}>Company Name :-</Text>
      <Text numberOfLines={1} style={style.companyText}>
        {edit ? (
          currentText ? (
            currentText?.details?.name
          ) : (
            ''
          )
        ) : (
          <View style={style.txtContainer}>
            <TextInput
              style={style.text}
              value={abcd}
              onChangeText={(text) => setAbcd(text)}
              keyboardType="default"
            />
          </View>
        )}
      </Text>
    </View>
  );
};

const CompanyDescriptionText = ({ edit, myDcTxt, setEtc, etc }) => {
  const currentText = useSelector((state) => state.myLog.LoginData);
  return (
    <View style={style.description}>
      <Text style={style.companyChild}>Company Description :-</Text>

      <Text numberOfLines={4} style={style.descriptionText}>
        {edit ? (
          currentText ? (
            currentText?.details?.description
          ) : (
            ''
          )
        ) : (
          <View style={style.txtContainer}>
            <TextInput
              style={style.text}
              value={etc}
              onChangeText={(text) => setEtc(text)}
              keyboardType="default"
            />
          </View>
        )}
      </Text>
    </View>
  );
};

export { CompanyNameText, CompanyDescriptionText };
