import Header from "../../../components/Header/Header";
import BgAnimation from "../Animation/BgAnimation";
import { HeaderStyled, MainStyled } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      <BgAnimation />
      <HeaderStyled>
        <Header />
      </HeaderStyled>
      <MainStyled>{children}</MainStyled>
    </>
  );
};

export default Layout;
