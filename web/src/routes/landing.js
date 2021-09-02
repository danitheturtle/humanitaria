import { graphql } from "relay-runtime";
import { Landing } from '../pages'

export default {
  path: "/landing",
  query: graphql`
    query landingQuery {
      me {
        id
        uid
        username
        email
      }
    }
  `,
  component: Landing,
  variables: {},
  getPageSettings: (queryRef) => ({
    title: "Humanitaria",
    description: "A progressive social network for direct action",
    props: { queryRef },
  }),
};