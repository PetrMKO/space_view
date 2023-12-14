import React, {FC, useState} from 'react';
import {buttonFragment, ButtonWrapper, ModalWrapper, RateWrapper, Text} from './styled';
import {Button} from '../../components/Button/Button';
import StarRate from './StarRate/StarRate';
import {PhotoOfDay} from '../../API/api';

type Props = {
  photo: PhotoOfDay
}
const AddToFavoriteModal: FC<Props> = ({ photo }) => {
  const [rate, setRate] = useState<number>(0)

  const onDownloadClick = () => {
    let link = document.createElement("a");
    link.setAttribute("href", photo.hdurl);
    link.setAttribute("target", "_blank");
    link.setAttribute("download", "image.jpg");
    link.click();
  }

  return (
    <ModalWrapper onClick={e => e.stopPropagation()}>
      <RateWrapper>
        <Text>Do you like the photo?</Text>
        <Text>Rate:</Text>
        <StarRate rate={rate} setRate={setRate}/>
      </RateWrapper>
      <ButtonWrapper>
        <Button fragment={buttonFragment} onClick={onDownloadClick}>
          Download
        </Button>
        {photo.isFavorite ?
            <Button fragment={buttonFragment}>
                Undo from favorites
            </Button>
          :<Button fragment={buttonFragment}>
            Add to favorite
          </Button>
        }
      </ButtonWrapper>
    </ModalWrapper>
  );
};

export default AddToFavoriteModal;