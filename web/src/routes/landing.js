import { graphql } from "relay-runtime";
import { Landing } from '../pages'

export default {
  path: "/landing",
  query: graphql`
    query landingQuery {
      notes {
        content
      }
    }
  `,
  component: Landing,
  getPageSettings: (data) => ({
    title: "Humanitaria",
    description: "A progressive social network for direct action",
    props: data,
  }),
};