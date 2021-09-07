import { graphql } from "relay-runtime";
import { Home } from '../pages'

export default {
  path: "/",
  query: graphql`
    query homeQuery($count: Int!, $cursor: String!) {
      me {
        __typename
      }
      ...NotesRoot_notes @arguments(count: $count, cursor: $cursor)
      ...NotesUser_notes @arguments(count: $count, cursor: $cursor)
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