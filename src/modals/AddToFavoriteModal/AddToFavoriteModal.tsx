import React, {FC, useContext, useEffect, useState} from 'react';
import {buttonFragment, ButtonWrapper, ModalWrapper, RateWrapper, Text} from './styled';
import {Button} from '../../components/Button/Button';
import StarRate from './StarRate/StarRate';
import {Photo} from '../../API/nasaApi';
import {userApi} from '../../API/userApi';
import {AuthContext} from '../../context/authContext';

type Props = {
  photo: Photo
  onClose: () => void;
  onBlock?: (photo: Photo) => void
}
const AddToFavoriteModal: FC<Props> = ({ photo, onClose, onBlock }) => {
  const [rate, setRate] = useState<number>(0)
  const { user } = useContext(AuthContext)
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const onDownloadClick = () => {
    let link = document.createElement("a");
    link.setAttribute("href", photo.url);
    link.setAttribute("target", "_blank");
    link.setAttribute("download", "image.jpg");
    link.click();
  }

  useEffect(() => {
    if (user) {
      userApi.getFavorites(user.id).then(({ data }) => {
        const links = data.photos.map((item) => item.url);
        if (links.includes(photo.url)) {
          setIsFavorite(true);
        }
      });
    }

  }, []);


  const onRate = (value: number) =>{
    if(user){
      setRate(value)
      userApi.rate(user.id, photo.url, value).then(() => {
        setTimeout(()=>{
          onClose();
        }, 200)
      });
    }
  }

  const onAddToFavorite = () => {
    if (user) {
      userApi.addToFavorites(user.id, photo.url).then(() => {
        onClose();
      });
    }
  };

  const onBlockPhoto = () => {
    if(onBlock){
      onBlock(photo)
    }
    if(user){
      userApi.addToBlocked(user.id, photo.url).then(() => {
        onClose()
      });
    }
  };

  return (
    <ModalWrapper onClick={e => e.stopPropagation()}>
      <RateWrapper>
        {isFavorite
          ? <Text> You already add this photo to favorites, do you want to download it?</Text>
          : <>
            <Text>Do you like the photo?</Text>
            <Text>Rate:</Text>
            <StarRate rate={rate} setRate={onRate}/>
          </>
        }
      </RateWrapper>

      <ButtonWrapper>
        {!isFavorite && <>
            <Button fragment={buttonFragment} onClick={onAddToFavorite}>
              Add to favorite
            </Button>
            <Button fragment={buttonFragment} onClick={onBlockPhoto}>
              Block photo
            </Button>
          </>
        }
        <Button fragment={buttonFragment} onClick={onDownloadClick}>
          Download
        </Button>
      </ButtonWrapper>
    </ModalWrapper>
  );
};

export default AddToFavoriteModal;