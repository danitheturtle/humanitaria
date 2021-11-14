import { graphql } from "relay-runtime";
import { Spaces } from '../pages'

// graphql`
//   query spacesQuery($spacename: String!) {
//     space(spacename: $spacename) {
//       __typename
//     }
//   }
// `

export default {
  path: ["/s", "/s/all", "/s/:spacename+"],
  query: graphql`
    query spacesQuery {
      me {
        __typename
      }
    }
  `,
  component: Spaces,
  variables: (routerCtx) => {
    return { spacename: routerCtx.params?.spacename?.[0] }
  },
  getPageSettings: (queryRef, routerCtx) => ({
    title: "Humanitaria Spaces",
    description: "Find or start communities, do activism together",
    props: { queryRef, spacename: routerCtx.params?.spacename?.[0] },
  }),
};