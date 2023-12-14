import React, {useEffect, useState} from 'react';
import {PageWrapper} from './styled';
import {PageHeader} from '../../components/PageHeader';
import {nasaApi, PhotoOfDay} from '../../API/api';
import {ImageGallery} from '../../components/ImageGalery/ImageGallery';

const AccountPage = () => {
  const [photos, setPhotos] = useState<PhotoOfDay[]>([])

  useEffect(() => {
    nasaApi.getPhotosOfDay({ count: 12 }).then(({ data }) => {
      setPhotos(data)
    })
  }, [])

  return (
    <PageWrapper>
      <PageHeader>
        You liked
      </PageHeader>
      <ImageGallery images={photos}/>
    </PageWrapper>
  );
};

export default AccountPage;