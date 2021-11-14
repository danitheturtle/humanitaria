import React from 'react';
import { Typography, Box, Avatar, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const makeStyles = theme => ({
  MembersHeader: {
    textAlign: 'center',
    fontWeight: 600
  },
  MembersList: {
    width: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    p: 0,
    m: 0
  },
  RoleWrapper: {
    width: 1,
    py: 2,
    px: 0,
    m: 0
  },
  RoleList: {
    width: 1,
    p: 0,
    m: 0
  },
  RoleHeader: {
    p: 0,
    m: 0,
    mb: 1,
    lineHeight: 1.5,
    backgroundColor: 'common.white'
  },
  RoleBody: {
    p: 0,
    m: -0.5,
    display: 'flex',
    flexWrap: 'wrap'
  },
  MemberAvatar: {
    m: 0.5,
    width: theme.spacing(6),
    height: theme.spacing(6)
  }
})

export const CommunityMembersByRole = ({ data }) => {
  const theme = useTheme();

  if (!data.members) return <div/>;
  const styles = makeStyles(theme);

  const membersByRole = Object.entries(data.members.reduce((acc, member) => {
    if (acc[member.role.name]) {
      acc[member.role.name].members.push(member.space);
    } else {
      acc[member.role.name] = {
        order: member.role.order,
        permissions: member.role.permissions,
        members: [member.space]
      }
    }
    return acc;
  }, {})).sort((
    [role1, { order: order1 }],
    [role2, { order: order2 }]
  ) => order1 > order2 ? 1 : -1);

  return <React.Fragment>
    <Typography variant="h5" component="div" sx={styles.MembersHeader}>
      {"Members"}
    </Typography>
    <List sx={styles.MembersList}>
      { membersByRole.map(([sectionName, sectionData]) => (
        <ListItem key={`section-${sectionName}`} sx={styles.RoleWrapper}>
          <List sx={styles.RoleList}>
            <ListSubheader sx={styles.RoleHeader}>{sectionName}</ListSubheader>
            <ListItem sx={styles.RoleBody}>
              {sectionData.members.map(member => (
                <Avatar key={member.uid} sx={styles.MemberAvatar}>
                  {member.name.split(' ').reduce((acc, part) => acc + part[0], "")}
                </Avatar>
              ))}
            </ListItem>
          </List>
        </ListItem>
      )) }
    </List>
  </React.Fragment>
};
