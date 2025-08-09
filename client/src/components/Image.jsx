import { IKImage } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;

const Image = (props) => {
  return <IKImage urlEndpoint={urlEndpoint} {...props}/>;
};

export default Image;
