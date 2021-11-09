import React, { useMemo } from 'react';
import { Box, Avatar } from '@mui/material';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import LayersSharpIcon from '@mui/icons-material/LayersSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import { SpacesSidebar, Space } from '../../components';
const managedSpaces = [{
  __typename: 'UserProfileSpace',
  vid: 'danitheturtle',
  uid: 'daniUserId',
  name: 'Dani',
  //both descriptions are max-length
  descriptionShort: 'Making humanitaria happen',
  descriptionLong: "\"We live in capitalism, its power seems inescapable - so did the divine right of kings\" -Ursula LeGuin. Building a socialist media platform. Avid gamer girl™. She/her",
  feature: {
    __typename: 'GalleryFeature',
    images: [
      { img: 'https://via.placeholder.com/360x600', title: '360x600 tall' },
      { img: 'https://via.placeholder.com/340x440', title: '240x340 tall' },
      { img: 'https://via.placeholder.com/300', title: '468 square' },
      { img: 'https://via.placeholder.com/336x300', title: '468 square' },
      { img: 'https://via.placeholder.com/468', title: '468 square' },
      { img: 'https://via.placeholder.com/362x220', title: '360x600 tall' },
      { img: 'https://via.placeholder.com/340x500', title: '240x340 tall' },
      { img: 'https://via.placeholder.com/295x90', title: '360x600 tall' }
    ]
  },
  stats: {
    Followers: '10',
    Ideas: '110',
    Age: '24',
    School: 'Homeschool',
    Gender: "Female",
    Pronouns: 'She / Her'
  },
  connectedSpaces: ['J', 'KF', 'R', 'HA', 'MJ', 'RE', 'NS']
}, {
  __typename: 'OrganizationProfileSpace',
  vid: 'mutualaidcinci',
  uid: 'daniUserId',
  name: 'Mutual Aid Cincinnati',
  descriptionShort: 'Mutually helping each other in the cincinnati area'
}];

const joinedSpaces = [{
  __typename: 'CommunitySpace',
  vid: 'rawb',
  uid: 'diwonn4n2no2o2',
  name: 'Rawb.TV',
  descriptionShort: 'A people-over-content roleplay community',
  descriptionLong: "Hey my names Rob and I've been creating content online for over 14 years professionally. I live in Toronto, Canada with my partner Meganzoor and our cat Illidan.",
  feature: {
    __typename: 'PictureFeature',
    src: { img: 'https://via.placeholder.com/300', title: '468 square' }
  }
}, {
  __typename: 'TopicSpace',
  vid: 'traaaaaaaaaaaans',
  uid: 'kwoeoroo2o2o',
  name: 'Traaaaaaaaaaaans',
  descriptionShort: 'Life is pain'
}, {
  __typename: 'TopicSpace',
  vid: 'itcouldhappenhere',
  uid: 'robertEvans',
  name: 'It Could Happen Here',
  descriptionShort: 'A daily show about how to survive the climate crumbles' //max length
}, {
  __typename: 'TopicSpace',
  vid: 'completeanarchy',
  uid: 'dkwowormmsmw',
  name: 'COMPLETEANARCHY',
  descriptionShort: 'Memes for edgy anarchists'
}];

const allSpaces = [{
  __typename: 'TopicSpace',
  vid: 'politics',
  uid: 'kwoeoroo2o2o',
  name: 'Politics',
  descriptionShort: 'Discussing US politics'
}, {
  __typename: 'TopicSpace',
  vid: 'activism',
  uid: 'robertEvans',
  name: 'Activism',
  descriptionShort: 'A community to discuss activism' //max length
}, {
  __typename: 'TopicSpace',
  vid: 'twoxchromosomes',
  uid: 'dkwowormmsmw',
  name: 'TwoXChromosomes',
  descriptionShort: 'A community of feminists supporting each other'
}];

export const Spaces = ({ queryRef, spacename }) => {
  const selectedSpace = useMemo(() => (managedSpaces.find(sp => sp.vid === spacename) ||
    joinedSpaces.find(sp => sp.vid === spacename) ||
    allSpaces.find(sp => sp.vid === spacename) || {}), [spacename]);

  return <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', width: 1, height: 1 }}>
    <SpacesSidebar 
      spacename={spacename} 
      managedSpaces={managedSpaces} 
      joinedSpaces={joinedSpaces} 
      allSpaces={allSpaces} 
    />
    <Space data={selectedSpace}/>
  </Box>
};
