import {AuthWrapper} from './styled';
import AuthTypeSelector from './components/AuthTypeSelector';
import {AuthTypes} from './types';
import {useEffect, useState} from 'react';
import {authComponents} from './authComponents';

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
    <AuthWrapper>
      {
        selectedType
        ? authComponents[selectedType]
        : <AuthTypeSelector setType={setSelectedType}/>
      }
    </AuthWrapper>
  );
};

export default AuthPage;