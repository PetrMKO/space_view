import React, {FC, useContext} from 'react';
import {ButtonImg, Header, HeaderTitle, LogOutButton, PageWrapper, StyledLink, Wrapper} from './styled';
import {AuthContext} from '../../context/authContext';
import {Link, useOutlet} from 'react-router-dom';
import Icon from '../../Icons/userIcon.png'

const MainLayout: FC = () => {
  const { user, setUser } = useContext(AuthContext)
  const outlet = useOutlet()
  console.log(user)

  const logout = () => {
    setUser(null);
  }

  return (
    <PageWrapper>
      <Header id={"headerLink"}>
        <div/>
        <StyledLink to={'/'}>
          <HeaderTitle>
            My Space
          </HeaderTitle>
        </StyledLink>

        <Wrapper>
          <Link to={user ? 'account' : '/denied'}>
            <ButtonImg src={Icon}/>
          </Link>
          {user && <LogOutButton onClick={logout}>Log out</LogOutButton>}
        </Wrapper>

      </Header>
      {outlet}
    </PageWrapper>
  );
};

export default MainLayout;