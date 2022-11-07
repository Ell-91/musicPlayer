import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Song } from '../../types'

export type SongListItemPops = {
    song: Song
}

const SongListItem = (props: SongListItemPops) => {
    const { song } = props;
    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri}} style={styles.image}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    image: {
        width: 100,
        height: 100
    },
    title: {
        color: 'white',
        fontSize: 24,
    },
    artist: {
        color: 'lightgrey',
        fontSize: 20,
    }

})

export default SongListItem