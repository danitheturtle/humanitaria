import { GalleryFeature } from './GalleryFeature';

export const Feature = ({ data }) => {
  if (data.__typename === 'GalleryFeature') {
    return <GalleryFeature data={data.images}/>;
  }
  return <div>Not Implemented Yet</div>
}