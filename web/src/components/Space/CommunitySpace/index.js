// import React from 'react';
// import { Box, Avatar, Button, Divider, Typography, Stack } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import { SpaceName } from '../../../components';
// import { ProfileDescription } from './ProfileDescription';
// import { ProfileStats } from './ProfileStats';
// import { ProfileConnections } from './ProfileConnections';
// import { Feature } from '../Feature';
// import { PostList } from './PostList';
// 
// const makeStyles = theme => ({
//   Profile: {
//     flexGrow: 1,
//     position: 'relative',
//     display: 'grid',
//     gridTemplateColumns: `${theme.spacing(24)} auto auto auto`,
//     gridTemplateRows: `${theme.spacing(24)} ${theme.spacing(36)} ${theme.spacing(12)} ${theme.spacing(32)} auto`,
//     gridGap: theme.spacing(3),
//     pt: 8,
//     pl: 8,
//     width: 1,
//     overflowX: 'hidden',
//     overflowY: 'scroll',
//     [theme.breakpoints.up('xl')]: {
//       overflow: 'hidden',
//       gridGap: theme.spacing(4),
//       gridTemplateColumns: `${theme.spacing(28)} auto auto auto 46%`,
//       gridTemplateRows: `${theme.spacing(28)} ${theme.spacing(36)} ${theme.spacing(12)} auto`,
//     }
//   },
//   DescriptionBox: {
//     position: 'relative',
//     gridColumn: 'span 3',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     pr: 3,
//     [theme.breakpoints.up('xl')]: {
//       pr: 0
//     }
//   },
//   FeatureBox: {
//     gridColumn: '2 / span 3',
//     gridRow: '2 / span 2',
//     pr: 3,
//     [theme.breakpoints.up('xl')]: {
//       pr: 0,
//       gridRow: '2 / span 3'
//     }
//   },
//   PostsBox: {
//     gridColumn: "2 / span 3", 
//     gridRow: "4 / span 3", 
//     [theme.breakpoints.up('xl')]: { 
//       gridColumn: '5 / span 1', 
//       gridRow: '1 / span 4',
//       overflowX: 'hidden',
//       overflowY: 'scroll',
//     } 
//   }
// });
// const postList = [{
//   id: 1,
//   owner: {
//     name: 'Dani',
//     vid: 'danitheturtle'
//   },
//   time: '2021-09-21T04:00:00.000Z',
//   content: 'matrix overriding invoice Accountability Investor Savings flexibility Markets Borders ROI Iowa New Grocery copy Handmade Home Tasty Azerbaijan seamless'
// }, {
//   id: 2,
//   owner: {
//     name: 'Dani',
//     vid: 'danitheturtle'
//   },
//   time: '2021-09-19T19:19:59.000Z',
//   content: 'Granite Squares Denar Games index RAM transmitter zero Self-enabling SMTP PNG innovate Accounts Practical Creative deposit bypassing Buckinghamshire Intranet Graniteth',
//   replyPosts: [{
//     id: 5,
//     parent: 2,
//     owner: {
//       name: 'Alex',
//       vid: 'slamongflobo'
//     },
//     time: '2021-09-19T19:19:59.000Z',
//     content: 'hahahaha, thats fun',
//     replyPosts: [{
//       id: 6,
//       parent: 5,
//       owner: {
//         name: 'Dani',
//         vid: 'danitheturtle'
//       },
//       time: '2021-09-15T19:19:59.000Z',
//       content: 'I know right?!'
//     }]
//   }, {
//     id: 7,
//     parent: 2,
//     owner: {
//       name: 'Meghan',
//       vid: 'otterbotter'
//     },
//     time: '2021-09-19T19:19:59.000Z',
//     content: 'The pancakes are infinite and so is my slap'
//   }]
// }, {
//   id: 3,
//   owner: {
//     name: 'Dani',
//     vid: 'danitheturtle'
//   },
//   time: '2021-09-19T19:19:59.000Z',
//   content: 'this is a test3'
// }, {
//   id: 4,
//   owner: {
//     name: 'Dani',
//     vid: 'danitheturtle'
//   },
//   time: '2021-09-19T19:19:59.000Z',
//   content: 'this is a test4'
// }]
// 
// export const UserProfileSpace = ({ data }) => {
//   const theme = useTheme();
//   const styles = makeStyles(theme);
// 
//   return <Box id="Profile" sx={styles.Profile}>
//     <Box gridColumn="span 1">
//       <Avatar sx={{ width: 1, height: 1, fontSize: 64 }}>H</Avatar>
//     </Box> 
//     <Box id="DescriptionBox" sx={styles.DescriptionBox}>
//       <ProfileDescription profile={{ name: 'Dani', vid: 'danitheturtle', description: "\"We live in capitalism, its power seems inescapable - so did the divine right of kings\" -Ursula LeGuin. Building a socialist media platform. Avid gamer girl™. She/her" /*maxlength*/ }} />
//     </Box>
//     <Stack id="SidebarBox" sx={{ gridColumn: '1', gridRow: '2 / span 3' }}>
//       <ProfileStats stats={{ Followers: '10', Ideas: '110', Age: '24', School: 'Homeschool', Gender: "Female", Pronouns: 'She / Her' }} />
//       <Divider component="div" sx={{ my: 3, w: 1, backgroundColor: 'primary.main' }} />
//       <ProfileConnections connectedSpaces={['J', 'KF', 'R', 'HA', 'MJ', 'RE', 'NS']} />
//     </Stack>
//     <Box id="FeatureBox" sx={styles.FeatureBox}>
//       <Feature 
//         data={{ 
//           __typename: 'GalleryFeature', 
//           images: [
//             { img: 'https://via.placeholder.com/360x600', title: '360x600 tall'},
//             { img: 'https://via.placeholder.com/340x440', title: '240x340 tall'},
//             { img: 'https://via.placeholder.com/300', title: '468 square'},
//             { img: 'https://via.placeholder.com/336x300', title: '468 square'},
//             { img: 'https://via.placeholder.com/468', title: '468 square'},
//             { img: 'https://via.placeholder.com/362x220', title: '360x600 tall'},
//             { img: 'https://via.placeholder.com/340x500', title: '240x340 tall'},
//             { img: 'https://via.placeholder.com/295x90', title: '360x600 tall'}
//           ]
//         }} />
//     </Box>
//     <Box id="PostsBox" sx={styles.PostsBox}>
//       <PostList postList={postList} maxIndentLevel={5} />
//     </Box>
//   </Box>
// };