import React, {useState} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import style from '../../../MyDrawer/Profile/style';
import UploadIcon from 'react-native-vector-icons/Feather';
import DocumentPicker from 'react-native-document-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../responsive/responsive';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileImage = ({
  PickPics,
  setPickPics,
  showPic,
  updateImages,
  profilePicLoading,
}) => {
  const [show, setShow] = useState(true);
  const [myImage] = useState(require('../../../../../assets/pro.jpg'));
  const upload = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setPickPics(file);
      updateImages(file);
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
    <TouchableOpacity style={style.imgContainer} onPress={upload}>
      {profilePicLoading ? (
        <View>
          <ActivityIndicator size={100} color="green" />
        </View>
      ) : (
        <>
          <View>
            <Image
              source={
                showPic
                  ? show
                    ? {uri: showPic}
                    : PickPics
                  : myImage && show
                  ? myImage
                  : PickPics
              }
              style={style.img}
            />
          </View>
          <View style={styles.uploadIconContainer}>
            <UploadIcon
              name="upload"
              size={25}
              color="black"
              style={styles.uploadIcon}
            />
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  uploadIconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  uploadIcon: {
    marginBottom: hp('1'),
    marginLeft: hp('6'),
    width: 35,
    height: 32,
    borderRadius: 20,
    textAlign: 'center',
    backgroundColor: 'white',
  },
});
