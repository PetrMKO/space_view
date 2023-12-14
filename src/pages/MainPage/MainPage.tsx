import {useEffect, useState} from 'react';
import {nasaApi, PhotoOfDay} from '../../API/api';
import {ImageOfDay, PageWrapper} from './styled';
import {PageHeader} from '../../components/PageHeader';
import {ImageGallery} from '../../components/ImageGalery/ImageGallery';
import ModalLayout from '../../layouts/ModalLayout/ModalLayout';
import AddToFavoriteModal from '../../modals/AddToFavoriteModal/AddToFavoriteModal';

const MainPage = () => {
  const [photos, setPhotos] = useState<PhotoOfDay[]>([])
  const [photoOfDay, setPhotoOfDay] = useState<PhotoOfDay>()

  const [selectedPhoto, setSelectedPhoto] = useState<PhotoOfDay | null>(null)
  const onOverlayClick = () => {
    setSelectedPhoto(null)
  }

  const onPhotoClick = (photo: PhotoOfDay) =>{
    setSelectedPhoto(photo)
  }

  useEffect(() => {
    nasaApi.getPhotoOfDay().then(({ data }) => {
      setPhotoOfDay(data)
    })
    nasaApi.getPhotosOfDay({ count: 12 }).then(({ data }) => {
      setPhotos(data)
    })
  }, [])

  return (
    <>
      <PageWrapper>
      <PageHeader>
        Photo of day
      </PageHeader>
      {photoOfDay &&
          <ImageOfDay src={photoOfDay.url} onClick={()=>onPhotoClick(photoOfDay)}/>
      }
      <PageHeader>
        Random photos
      </PageHeader>
      <ImageGallery images={photos}/>
    </PageWrapper>
      {!!selectedPhoto &&
          <ModalLayout
              onOverlayClick={onOverlayClick}>
              <AddToFavoriteModal photo={selectedPhoto}/>
          </ModalLayout>
      }
    </>
  );
};

export default MainPage;