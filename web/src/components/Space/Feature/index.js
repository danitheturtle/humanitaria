import { GalleryFeature } from './GalleryFeature';
import { PictureFeature } from './PictureFeature';

export const Feature = ({ data }) => {
  if (data.__typename === 'GalleryFeature') {
    return <GalleryFeature data={data.images} />;
  } else if (data.__typename === 'PictureFeature') {
    return <PictureFeature data={data.src} />
  }
  return <div>Not Implemented Yet</div>
}