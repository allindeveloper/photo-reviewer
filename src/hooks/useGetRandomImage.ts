import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { getRandomImageApiService } from "services/images";
import { IImage } from "types/image";
import { useAppSelector } from "./hooks";
const useGetRandomImage = () => {
  const [randomImage, setrandomImage] = useState<IImage>({
    urls: {
      raw: "",
      full: "",
      regular: "",
      small: "",
      thumb: "",
    },
    description: "",
    id: "",
  });
  const [loading, setloading] = useState(false);
  const images = useAppSelector(state => state.imageReducer);

  const getRandomImage = () => {
    setloading(true);
    getRandomImageApiService()
      .then((res: AxiosResponse<IImage>) => {
        setloading(false);
        // need to change this logic
        const imageExist = images.rejectedImages.some(
          item => item.id === res.data.id && item.urls.regular === res.data.urls.regular,
        );
        if (imageExist) {
          getRandomImage();
        } else {
          setrandomImage({
            id: res.data.id,
            urls: res.data.urls,
            description:res.data.description
          });
        }
      })
      .catch((err: AxiosError) => {
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
