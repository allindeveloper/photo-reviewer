import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { getRandomImageApiService } from "services/images";
import { IImage } from "types/image";
const useGetRandomImage = () => {
  const [randomImage, setrandomImage] = useState<IImage>({urls: {
    raw: "",
    full: "",
    regular: "",
    small: "",
    thumb: "",
},
id:''});
  const [loading, setloading] = useState(false);

  const getRandomImage = () => {
    setloading(true);
    getRandomImageApiService()
      .then((res:AxiosResponse<IImage>) => {
        setloading(false);
       setrandomImage(res.data)
      })
      .catch((err:AxiosError) => {
        setloading(false);
      });
  };

  return {
    randomImage,
    getRandomImage,
    loading,
  };
};

export default useGetRandomImage;
