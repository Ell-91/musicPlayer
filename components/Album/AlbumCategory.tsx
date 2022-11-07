import React from 'react'
import { Text, Image, View, FlatList, StyleSheet} from 'react-native';
import { Album } from '../../types';
import AlbumComponent from './AlbumComponent';

export type AlbumCategoryProps = {
  title: string,
  albums: [Album],
}

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
        <FlatList
          data={props.albums}
          renderItem={({ item }) => <AlbumComponent album={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
    </View>

  )

};

const styles = StyleSheet.create({
  container:{
    margin:10
  },
  title:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
})

export default AlbumCategory