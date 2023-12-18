import {AuthWrapper} from './styled';
import AuthTypeSelector from './components/AuthTypeSelector';
import {AuthTypes} from './types';
import {useEffect, useState} from 'react';

const AuthPage = () => {
  const [selectedType, setSelectedType] = useState<AuthTypes>()

  useEffect(() => {
    const onHeaderClick = () => {
      setSelectedType(undefined)
    }
    const header = document.querySelector('#headerLink')
    header?.addEventListener('click', onHeaderClick)

    return() =>{
      header?.removeEventListener('click', onHeaderClick)
    }
  }, []);

  return (

      <></>
  );
};

export default AuthPage;