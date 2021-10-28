import { graphql } from "relay-runtime";
import { ActionMap } from '../pages'

export default {
  path: "/map",
  query: graphql`
    query actionMapQuery($first: Int!, $after: String, $search: String, $locationNearInput: locationNearInput!) {
      me {
        __typename
      }
      ...SearchResultsAutocomplete_locations @arguments(first: $first, after: $after, search: $search)
      ...LocationOnClick_location @arguments(input: $locationNearInput)
    }
  `,
  component: ActionMap,
  variables: { first: 1, search: 'United States', locationNearInput: {} },
  getPageSettings: (queryRef) => ({
    title: "Humanitaria",
    description: "A progressive social network for direct action",
    props: { queryRef },
  }),
};