import { IKContext, IKUpload } from "imagekitio-react";
import axios from "axios";

const IKUploadComponent = (props) => {
  const authenticator = async () => {
    try {
      const response = await axios.get("http://localhost:3000/upload-auth");
      if (!response) console.log("Authentication Error");
      console.log(response);

      const { signature, expire, token } = response.data;
      return { signature, expire, token };
    } catch (err) {
      console.log(err);
    }
  };
  const onError = (res) => {
    console.log(res);
  };

  const onSuccess = (res) => {
    props.setImgURL(res.url);
  };
  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUB_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName={true}
        onError={onError}
        onSuccess={onSuccess}
        {...props}
      />
    </IKContext>
  );
};

export default IKUploadComponent;
