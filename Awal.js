import React from 'react';
import { StyleSheet,Text, View, TextInput, TouchableHighlight, Button,Image } from 'react-native';
export default class AboutMe extends React.Component {
  render() {
      return (
      <View style={styles.vMain}>
      <View style={styles.vHeader}>
          <Text>PERPUSTAKAAN</Text>
      </View>
      <View style={styles.box1}>
                  <Text>Masukkan QR Code</Text>
                </View>
                <View style={styles.box1}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.About()}>
                  <Text style={styles.txtButton}>About</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.vFooter}>
                  <Text>sistemperpustakaan: Ainul Mardiah / 1715051034</Text>
                  </View>
      </View>
  );
}
}
const styles = StyleSheet.create({
vMain:{
  flex: 1,
  backgroundColor: '#ffffff',
},
vHeader: {
  flex: 0.3,
  backgroundColor: '#ff69b4',
  alignItems: 'center',
  borderRadius:0,
  borderColor: '#000000',
  fontSize:32,
  justifyContent: 'center',
},
vFooter: {
  flex: 0.3,
  backgroundColor: '#ff69b4',
  alignItems: 'center',
  borderRadius:0,
  borderColor: '#000000',
  fontSize:32,
  justifyContent: 'center',
},
box1: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
box2: {
   flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  justifyContent: 'space-around',
  width: '30%',
  height: 50,
  color:'#ff1493',
},
txtButton: {
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  fontSize: 20,
  width: '100%',
},
vButton: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#d3d3d3',
  borderRadius: 10,
  margin:20,
  width: '70%',
  height: 50,
},
Text:{
  marginTop: 10,
  borderWidth: 3,
  margin:10,
  padding: 5,
  fontSize:13,
  color: 'white',
},
});
