import React from 'react'
import { StyleSheet, View, FlatList} from 'react-native';
import AlbumCategory from '../components/Album/AlbumCategory';
import albumCategory from '../data/albumCategory';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategory}
        renderItem={({ item }) => (
          <AlbumCategory 
            title={item.title} 
            albums={item.albums} 

            />
        )}
        keyExtractor={(item) => item.id}
        />
    </View>

  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
