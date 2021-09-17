import {UserProfileSpace} from './UserProfileSpace';

export const Space = ({ data }) => {
  if (data.__typename === 'UserProfileSpace') {
    return <UserProfileSpace data={data}/>;
  }
  return <div>Not Implemented Yet</div>
}