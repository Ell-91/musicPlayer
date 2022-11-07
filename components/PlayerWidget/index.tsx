import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Song } from '../../types'
import { EvilIcons, FontAwesome } from '@expo/vector-icons';

const song = {
    id: '1',
    imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
    title: 'High on You',
    artist: 'Helen'
}

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <Image source={{ uri: song.imageUri}} style={styles.image}/>
                    <View style={styles.rightContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.title}>{song.title}</Text>
                            <Text style={styles.artist}>{song.artist}</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            <EvilIcons name='heart' size={30} color={'white'}/>
                            <FontAwesome name='play' size={30} color={'white'}/>
                        </View>
                    </View>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 49,
        backgroundColor: '#131313',
        width:'100%',
        borderColor:'black',
        borderWidth: 2,
      },
      row:{
        flexDirection: 'row'
      },
      rightContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:1,
      },
      nameContainer:{
        flexDirection:'row',
        alignItems:'center'
      },
      iconsContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:100,
        justifyContent:'space-around',
        paddingRight:25
      },
      image:{
        width:75,
        height:75,
        marginRight: 10
      },
      title:{
        color:'white',
        fontSize:16,
        fontWeight: 'bold',
        margin:5
      },
    artist: {
        color: 'lightgrey',
        fontSize: 18
    }})

export default PlayerWidget