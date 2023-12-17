import {Photo} from '../../API/nasaApi';
import {FC, Fragment, useState} from 'react';
import {BatchDivider, Image, ImagesWrapper} from './styled';
import ModalLayout from '../../layouts/ModalLayout/ModalLayout';
import AddToFavoriteModal from '../../modals/AddToFavoriteModal/AddToFavoriteModal';

type Props = {
  images: Photo[]
  onBlock?: (photo: Photo) => void
}

export const ImageGallery: FC<Props> = ({ images, onBlock }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const onOverlayClick = () => {
    setSelectedPhoto(null)
  }

  const onPhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  const batches = images.reduce((acc, item) => {
    if (acc[acc.length - 1].length < 3) {
      acc[acc.length - 1].push(item)
    } else {
      acc.push([item])
    }
    return acc
  }, [[]] as Photo[][])

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
            <AddToFavoriteModal photo={selectedPhoto} onClose={onOverlayClick} onBlock={onBlock}/>
        </ModalLayout>
    }
  </>)
}