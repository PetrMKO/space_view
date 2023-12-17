import {useContext, useEffect, useState} from 'react';
import {nasaApi, Photo, PhotoOfDay} from '../../API/nasaApi';
import {ImageOfDay, PageWrapper} from './styled';
import {PageHeader} from '../../components/PageHeader';
import {ImageGallery} from '../../components/ImageGalery/ImageGallery';
import ModalLayout from '../../layouts/ModalLayout/ModalLayout';
import AddToFavoriteModal from '../../modals/AddToFavoriteModal/AddToFavoriteModal';
import {AuthContext} from '../../context/authContext';
import {userApi} from '../../API/userApi';

const MainPage = () => {
  const [photos, setPhotos] = useState<PhotoOfDay[]>([])
  const [photoOfDay, setPhotoOfDay] = useState<PhotoOfDay>()
  const { user } = useContext(AuthContext);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoOfDay | null>(null)
  const [blocked, setBlocked] = useState<string[]>([]);

  const onOverlayClick = () => {
    setSelectedPhoto(null)
  }

  const onPhotoClick = (photo: PhotoOfDay) => {
    setSelectedPhoto(photo)
  }

  useEffect(() => {
    nasaApi.getPhotoOfDay().then(({ data }) => {
      setPhotoOfDay(data)
    })
    if (user) {
      userApi
        .getBlocked(user?.id)
        .then(({ data }) => {
          setBlocked(data.photos.map((item) => item.url));
        }).then(() => nasaApi.getPhotosOfDay({ count: 12 }))
        .then(({ data }) => {
          setPhotos(
            data.filter(
              (item) => item.media_type === "image" && !blocked.includes(item.url)
            )
          );
        });
    }

  }, [])

  const onBlock = (photo: Photo) => {
    console.log(photo)
    setPhotos((prev) => prev.filter((item) => item.url !== photo.url));
  };

  return (
    <>
      <PageWrapper>
        <PageHeader>
          Photo of day
        </PageHeader>
        {photoOfDay &&
            <ImageOfDay src={photoOfDay.url} onClick={() => onPhotoClick(photoOfDay)}/>
        }
        <PageHeader>
          Random photos
        </PageHeader>
        <ImageGallery images={photos} onBlock={onBlock}/>
      </PageWrapper>
      {!!selectedPhoto &&
          <ModalLayout
              onOverlayClick={onOverlayClick}>
              <AddToFavoriteModal photo={selectedPhoto} onClose={onOverlayClick}/>
          </ModalLayout>
      }
    </>
  );
};

export default MainPage;