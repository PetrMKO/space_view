import React, {FC, useContext} from 'react';
import {ButtonImg, Header, HeaderTitle, PageWrapper, StyledLink} from './styled';
import {AuthContext} from '../../context/authContext';
import {Link, useOutlet} from 'react-router-dom';
import Icon from '../../Icons/userIcon.png'
import AuthPage from '../../pages/AuthPage/AuthPage';

const MainLayout: FC = () => {
  const { isAuth } = useContext(AuthContext)
  const outlet = useOutlet()

  return (
    <PageWrapper>
      <Header isAuth={isAuth}>
        <div/>
        <StyledLink to={'/'}>
          <HeaderTitle>
            My Space
          </HeaderTitle>
        </StyledLink>

        {isAuth &&
            <Link to={'/account'}>
                <ButtonImg src={Icon}/>
            </Link>
        }
      </Header>
      {
        isAuth
          ? (outlet)
          : <AuthPage/>
      }
    </PageWrapper>
  );
};

export default MainLayout;