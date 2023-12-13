import React, {FC} from 'react';
import {Header, PageWrapper} from './styled';

type Props = {
  children: React.ReactNode
}
const MainLayout: FC<Props> = ({children}) => {
  return (
    <PageWrapper>
      <Header/>
      {children}
    </PageWrapper>
  );
};

export default MainLayout;