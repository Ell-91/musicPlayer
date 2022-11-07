import React from 'react';
import {Album} from '../../types';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import albumDetails from '../../data/albumDetails';

export type AlbumHeaderPops = {
    album: Album
}

const AlbumHeader = (props: AlbumHeaderPops) => {
    const { album } = props
    return (
        <View style={styles.container}>
                <Image source={{ uri: album.imageUri }} style={styles.image}/> 
                <Text style={styles.name}>{album.name}</Text>
                <View style={styles.creatorContainer}>
                    <Text style={styles.creator}>By {album.by}</Text>
                    <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>PLAY</Text>
                     </View>
                </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200
    },
    name: {
        color: 'white',
        fontSize: 30,
        frontWeight: 'bold'

    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10

    },
    button: {
        backgroundColor: '#1CD05D',
        height: 60,
        width: 175,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20

    },
    creator: {
        color: 'lightgrey',
        margin: 5,
        fontSize: 24

    },
    likes: {
        color: 'lightgrey',
        margin: 5,
        fontSize: 24


    }

})

export default AlbumHeader