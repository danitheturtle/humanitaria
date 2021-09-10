import { graphql } from "relay-runtime";
import { AccountSettings } from '../pages'

export default {
  path: "/me/settings",
  query: graphql`
    query accountSettingsQuery {
      me {
        id
        uid
        username
        email
        name
        picture
        timezone
        locale
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