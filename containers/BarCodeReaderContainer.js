import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { barcodeScanned } from '../actions'
import CodeReader from '../components/CodeReader'
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Text,
  Button,
} from 'react-native';

const mapStateToProps = (state) => ({
  isActive: state.codeReader.isCodeReaderEnabled
})

const mapDispatchToProps = (dispatch) => ({
  onCodeRead: (barcode) => dispatch(barcodeScanned(barcode))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeReader)
