import {AuthWrapper} from './styled';
import AuthTypeSelector from './components/AuthTypeSelector';
import {AuthTypes} from './types';
import {useState} from 'react';
import {authComponents} from './authComponents';

const AuthPage = () => {
const [selectedType, setSelectedType] = useState<AuthTypes>()

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