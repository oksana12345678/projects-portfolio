import {
  BurgerAndLanguageContainer,
  Image,
  ImageStyled,
  LanguageSwitcherContainer,
  ListStyle,
  MainContainer,
} from "./Header.styled";

import logo from "/logo.png";

import useLanguageChanger from "../../i18n/utils/LanguageChanger";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

const Header = () => {
  const { handleChangeLanguage } = useLanguageChanger();
  const handleLanguageSelect = (newLocale) => {
    handleChangeLanguage(newLocale);
  };

  return (
    <>
      <MainContainer>
        <ImageStyled>
          <a href="">
            <Image src={logo} />
          </a>
        </ImageStyled>
        <BurgerAndLanguageContainer>
          <LanguageSwitcherContainer>
            <LanguageSelector handleLanguageSelect={handleLanguageSelect} />
          </LanguageSwitcherContainer>
        </BurgerAndLanguageContainer>
        <ListStyle>
          <li>
            <LanguageSelector handleLanguageSelect={handleLanguageSelect} />
          </li>
        </ListStyle>
      </MainContainer>
    </>
  );
};

export default Header;
