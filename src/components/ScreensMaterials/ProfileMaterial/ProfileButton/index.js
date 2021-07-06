import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import style from '../../../MyDrawer/Profile/style';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageModal from 'react-native-image-modal';

const ProfileButton = ({isLoading, Submit, disabled}) => {
  const [BtnText] = useState('Save');
  return (
    <TouchableOpacity onPress={Submit} disabled={disabled}>
      <View style={style.btnContainer}>
        {isLoading ? (
          <View>
            <ActivityIndicator size={17} color="#00ff00" />
          </View>
        ) : (
          <View>
            <FontAwesome
              name="sign-in"
              size={17}
              color="white"
              style={style.btnIcon}
            />
            <Text style={style.btnText}>{BtnText}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const ProfileCv = ({Pics, setPics, cvPic, saveCvImgUrl, cvPicLoading}) => {
  const [show, setShow] = useState(true);
  const [myImage] = useState(require('../../../../../assets/cv-main.jpg'));
  const cvUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setPics(res);
      saveCvImgUrl(res);
      setShow(false);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };
  return (
    <View>
      <TouchableOpacity style={style.cvUploaded} onPress={cvUpload}>
        <Text style={style.cvMain}>Attach Your Cv...</Text>
      </TouchableOpacity>
      <View style={style.selectedImg}>
        {cvPicLoading ? (
          <View>
            <ActivityIndicator size={100} color="green" />
          </View>
        ) : (
          <ImageModal
            resizeMode="contain"
            style={style.selected}
            source={
              cvPic
                ? show
                  ? {uri: cvPic}
                  : Pics
                : myImage && show
                ? myImage
                : Pics
            }
          />
        )}
      </View>
    </View>
  );
};

export {ProfileButton, ProfileCv};
