import React, {useContext, useEffect, useState} from 'react';
import {PageWrapper} from './styled';
import {PageHeader} from '../../components/PageHeader';
import {Photo} from '../../API/nasaApi';
import {ImageGallery} from '../../components/ImageGalery/ImageGallery';
import {userApi} from '../../API/userApi';
import {AuthContext} from '../../context/authContext';

const AccountPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const {user} = useContext(AuthContext)
  useEffect(() => {
    if(user){
      userApi.getFavorites(user.id).then(({ data }) => {
        setPhotos(data.photos);
      });
    }

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