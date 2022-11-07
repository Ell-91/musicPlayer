import { FlatList} from 'react-native';
import React , {useEffect} from 'react';
import { View } from '../components/Themed';

import { useRoute } from '@react-navigation/core';

import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem ';
import AlbumHeader from '../components/AlbumHeader';


export default function AlbumScreen() {
  const route = useRoute();

  //display the contents of our route only calls once accomplished by sending an empy array to useEffect
  useEffect(() => {
    console.log(route)

  }, [])
  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({item}) => <SongListItem song={item}/> }
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails}/>}
      />
    </View>
  );
}
