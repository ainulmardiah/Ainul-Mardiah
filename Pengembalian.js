import React from 'react';
import { StyleSheet,Text,ScrollView, View, TextInput, TouchableHighlight, Button,Image } from 'react-native';
export default class AboutMe extends React.Component {
  render() {
      return (
      <View style={styles.vMain}>
      <ScrollView>
      <View style={styles.vHeader}>
          <Text>DATA PENGEMBALIAN</Text>
      </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Kode_Kembali"
                  onChangeText={Kode_Kembali => this.setState({ Kode_Kembali})}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Tanggal_Kembali"
                  onChangeText={Tanggal_Kembali => this.setState({ Tanggal_Kembali })}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Jatuh_Tempo"
                  onChangeText={Jatuh_Tempo => this.setState({ Jatuh_Tempo })}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Denda_Per_Hari"
                  onChangeText={Denda_Per_Hari => this.setState({ Denda_Per_Hari })}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Jumlah_Hari"
                  onChangeText={Jumlah_Hari => this.setState({ Jumlah_Hari })}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Total_Denda"
                  onChangeText={Total_Denda => this.setState({ Total_Denda })}
                  />
                </View>
                 <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Kode_Anggota"
                  onChangeText={Kode_Anggota => this.setState({ Kode_Anggota })}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Kode_Buku"
                  onChangeText={Kode_Buku => this.setState({ Kode_Buku })}
                  />
                </View>
                <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Daftar()}>
                  <Text style={styles.txtButton}>Daftar</Text>
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
                <View style={styles.vFooter}>
                  <Text>sistemperpustakaan: Ainul Mardiah / 1715051034</Text>
                  </View>
        </ScrollView>
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
  marginTop: 20,
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
