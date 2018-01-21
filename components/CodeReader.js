import Camera from 'react-native-camera';
import React , { PropTypes } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Text,
  Modal,
} from 'react-native';


const CodeReader = ({isActive, onCodeRead}) => {
  const cameraOptions = {
    aspect: Camera.constants.Aspect.fill,
    captureTarget: Camera.constants.CaptureTarget.cameraRoll,
    type: Camera.constants.Type.back,
    orientation: Camera.constants.Orientation.auto,
    flashMode: Camera.constants.FlashMode.auto,
    defaultTouchToFocus: true,
    defaultOnFocusComponent: true,
    mirrorImage: false
  }
  const styles = StyleSheet.create({
    container: {
      flex : 1,
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        captureQuality = {Camera.constants.CaptureQuality.low}
        flashMode = {Camera.constants.FlashMode.off}
        torchMode = {Camera.constants.TorchMode.off}
        style={styles.preview}
        onBarCodeRead={e => (isActive? onCodeRead(e.data): null)}
        {...cameraOptions}
      />
    </View>
  )
}

CodeReader.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onCodeRead: PropTypes.func
}

export default CodeReader
