import { graphql } from "relay-runtime";
import { ActionMap } from '../pages'

export default {
  path: "/map",
  query: graphql`
    query actionMapQuery($first: Int!, $after: String, $search: String) {
      me {
        __typename
      }
      ...SearchResultsAutocomplete_locations @arguments(first: $first, after: $after, search: $search)
    }
  `,
  component: ActionMap,
  variables: { first: 1, search: 'United States' },
  getPageSettings: (queryRef) => ({
    title: "Humanitaria",
    description: "A progressive social network for direct action",
    props: { queryRef },
  }),
};