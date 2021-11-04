import { UserProfileSpace } from './UserProfileSpace';
import { CommunitySpace } from './CommunitySpace';

export const Space = ({ data }) => {
  if (data.__typename === 'UserProfileSpace') {
    return <UserProfileSpace data={data}/>;
  }
  if (data.__typename === 'CommunitySpace') {
    return <CommunitySpace data={data}/>;
  }
  return <div>Not Implemented Yet</div>
}