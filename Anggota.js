import React from 'react';
import { StyleSheet,Text,ScrollView, View, TextInput, TouchableHighlight, Button,Image } from 'react-native';
export default class AboutMe extends React.Component {
  render() {
      return (
      <View style={styles.vMain}>
      <View style={styles.vHeader}>
          <Text>DATA ANGGOTA</Text>
      </View>
      <ScrollView>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Kode_Anggota"
                  onChangeText={Kode_Anggota => this.setState({ Kode_Anggota})}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Nama"
                  onChangeText={Nama => this.setState({ Nama })}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Jk"
                  onChangeText={Jk => this.setState({ Jk })}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Jurusan"
                  onChangeText={Jurusan => this.setState({ Jurusan})}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Angkatan"
                  onChangeText={Angkatan => this.setState({ Angkatan })}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Alamat"
                  onChangeText={Alamat => this.setState({ Alamat })}
                  />
                </View>
                <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Next()}>
                  <Text style={styles.txtButton}>Next</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Kembali()}>
                  <Text style={styles.txtButton}>Kembali</Text>
                  </TouchableHighlight>
                </View>
        </ScrollView>
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
  flex: 1,
  backgroundColor: '#ff69b4',
  alignItems: 'center',
  borderRadius:0,
  borderColor: '#000000',
  fontSize:32,
  justifyContent: 'center',
},
vFooter: {
  flex: 1,
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
      width: "100%",
      marginTop: 10,
      paddingTop: 10,
      flexDirection: 'row'
},

    box3: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
txtBox1: {
      width: 200,
      height: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#000000',
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
