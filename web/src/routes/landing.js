import { graphql } from "relay-runtime";
import { Landing } from '../pages'

export default {
  path: "/landing",
  query: graphql`
    query landingQuery($count: Int!, $cursor: String!) {
      ...Notes_notes
    }
  `,
  component: Landing,
  variables: {
    count: 10,
    cursor: "0"
  },
  getPageSettings: (data) => ({
    title: "Humanitaria",
    description: "A progressive social network for direct action",
    props: data,
  }),
};