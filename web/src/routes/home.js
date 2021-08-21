import { graphql } from "relay-runtime";
import { Home } from '../pages'

export default {
  path: "/",
  query: graphql`
    query homeQuery {
      notes {
        id
        content
      }
    }
  `,
  component: Home,
  getPageSettings: (data) => ({
    title: "Humanitaria",
    description: "A progressive social network for direct action",
    props: data,
  }),
};