/* eslint-disable react/prop-types */
import { IKImage } from 'imagekitio-react';

const Image = ({src,className ,alt ,h,w}) => {
  return(
  <IKImage
  urlEndpoint={import.meta.env.VITE_YOUR_IMAGEKIT_URL_ENDPOINT}
  path={src}
  className={className}
  loading="lazy"
  lqip={{ active: true, quality: 20 }}
  alt={alt}
  height={h}
  width={w}
/>
);
};

export default Image
