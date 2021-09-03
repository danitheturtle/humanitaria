import { graphql } from "relay-runtime";
import { GraphQLInt, GraphQLString } from 'graphql';
import { Home } from '../pages'

export default {
  path: "/",
  query: graphql`
    query homeQuery($count: Int!, $cursor: String!) {
      me {
        id
        uid
        username
      }
      ...NotesRoot_notes
      ...NotesUser_notes
    }
  `,
  component: Home,
  variables: {
    count: 10,
    cursor: "0"
  },
  getPageSettings: (queryRef) => ({
    title: "Humanitaria",
    description: "A progressive social network for direct action",
    props: { queryRef },
  }),
};