import { graphql } from "relay-runtime";
import { AccountSettings } from '../pages'

export default {
  path: "/me/settings",
  query: graphql`
    query accountSettingsQuery {
      me {
        __typename
      }
    }
  `,
  component: AccountSettings,
  variables: {},
  getPageSettings: (queryRef) => ({
    title: "Humanitaria - Account Settings",
    description: "A progressive social network for direct action",
    props: { queryRef },
  }),
};