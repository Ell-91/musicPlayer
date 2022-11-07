/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from  '@react-navigation/native'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  AlbumScreen: undefined
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  HomeScreen: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
  
>;


export type BottomTabParmList = {
  HomeScreen: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
}

export type HomeScreenParamList = {
  HomwScreen: undefined;
}

export type TabTwoParamList = {
  TabTwoScreen: undefined;
}

export type TabThreeParamList = {
  TabThreeScreen: undefined;
}

export type TabTFourParamList = {
  TabFourScreen: undefined;
}

export type Album = {
  id: string;
  imageUri: string;
  artistsHeadline: string;
  numberOfLikes: number;
  by: string;
  name: string;
};

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
};