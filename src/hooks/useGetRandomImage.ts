import { useState } from "react";
import { getRandomImageApiService } from "services/images";
import { IImage } from "types/image";

const useGetRandomImage = () => {
  const [randomImage, setrandomImage] = useState<IImage>();
  const [loading, setloading] = useState(false);

  const getRandomImage = () => {
    setloading(true);
    getRandomImageApiService()
      .then(() => {
        setloading(false);
      })
      .catch(() => {
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
