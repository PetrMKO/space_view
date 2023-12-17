import React, {FC, useContext} from 'react';
import {ButtonImg, Header, HeaderTitle, LogOutButton, PageWrapper, StyledLink, Wrapper} from './styled';
import {AuthContext} from '../../context/authContext';
import {Link, useOutlet} from 'react-router-dom';
import Icon from '../../Icons/userIcon.png'
import AuthPage from '../../pages/AuthPage/AuthPage';

const MainLayout: FC = () => {
  const { user, setUser } = useContext(AuthContext)
  const outlet = useOutlet()

  const logout = () =>{
    setUser(null);
  }
  return (
    <PageWrapper>
      <Header isAuth={!!user} id={"headerLink"}>
        <div/>
        <StyledLink to={'/'}>
          <HeaderTitle>
            My Space
          </HeaderTitle>
        </StyledLink>

        {user &&
            <Wrapper>
                <Link to={'/account'}>
                    <ButtonImg src={Icon}/>
                </Link>
                <LogOutButton onClick={logout}>Log out</LogOutButton>
            </Wrapper>
        }
      </Header>
      {
        user
          ? (outlet)
          : <AuthPage/>
      }
    </PageWrapper>
  );
};

export default MainLayout;