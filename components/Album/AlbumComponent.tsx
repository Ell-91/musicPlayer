import React from 'react'
import { Text, Image, View, FlatList, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
  album: Album,
}

const AlbumComponent = (props: AlbumProps) => {
  //After clicking on the album it redirects to the album page 
  const navigation = useNavigation();


  const onPress = () => {
    navigation.navigate('AlbumScreen', {id: props.album.id})
    // console.warn(`Album pressed: ${props.album.artistsHeadline}`)
  }
  return (
  /** Able to detect clicks on each album*/
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.album.imageUri}} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>

    
  )

};

const styles = StyleSheet.create({
  container:{
    width: 150,
    margin: 10
  },
  image:{
    width: '100%',
    height: 150,
 }, 
 text: {
   color: 'grey',
   marginTop: 10,

 }
})

export default AlbumComponent