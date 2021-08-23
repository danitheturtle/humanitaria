import { graphql } from "relay-runtime";
import { Home } from '../pages'

export default {
  path: "/",
  query: graphql`
    query homeQuery {
      notes {
        id
        content
        ...Notes_note
      }
    }
  `,
  component: Home,
  getPageSettings: (queryRef) => ({
    title: "Humanitaria",
    description: "A progressive social network for direct action",
    props: { queryRef },
  }),
};