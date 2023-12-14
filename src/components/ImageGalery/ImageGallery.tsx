import {PhotoOfDay} from '../../API/api';
import {FC, Fragment, useState} from 'react';
import {BatchDivider, Image, ImagesWrapper} from './styled';
import ModalLayout from '../../layouts/ModalLayout/ModalLayout';
import AddToFavoriteModal from '../../modals/AddToFavoriteModal/AddToFavoriteModal';

type Props = {
  images: PhotoOfDay[]
}

export const ImageGallery: FC<Props> = ({ images }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoOfDay | null>(null)
  const onOverlayClick = () => {
    setSelectedPhoto(null)
  }

  const onPhotoClick = (photo: PhotoOfDay) => {
    setSelectedPhoto(photo)
  }

  const batches = images.reduce((acc, item) => {
    if (acc[acc.length - 1].length < 3) {
      acc[acc.length - 1].push(item)
    } else {
      acc.push([item])
    }
    return acc
  }, [[]] as PhotoOfDay[][])

  return (<>
    {batches.map((item, index, array) =>
      <Fragment key={index}>
        <ImagesWrapper>
          {item.map((photo) =>
            <Image key={photo.url} src={photo.url} onClick={() => onPhotoClick(photo)}/>
          )}
        </ImagesWrapper>
        {index !== array.length - 1 && <BatchDivider/>}
      </Fragment>
    )}
    {!!selectedPhoto &&
        <ModalLayout
            onOverlayClick={onOverlayClick}>
            <AddToFavoriteModal photo={selectedPhoto}/>
        </ModalLayout>
    }
  </>)
}