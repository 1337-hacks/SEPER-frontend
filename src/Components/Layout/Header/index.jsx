import React from "react";
import { 
    HeaderContainer, 
    Logo, 
    LogoWrapper, 
    NavBar, 
    NavButtons, 
    NavList 
} from "./header";
import { Link, } from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoWrapper>
            <Link to ='/'>
                <Logo src='/seperlogo.png' alt='Seper Logo' />
            </Link>
            </LogoWrapper>            
            <NavBar>
                <NavList>
                    <Link to = '/'>
                        <NavButtons> Home </NavButtons>
                    </Link>
                    <Link to = '/'>
                        <NavButtons> Search? </NavButtons>
                    </Link>
                    <Link to = '/'>
                        <NavButtons> Articles </NavButtons>
                    </Link>
                    <Link to = '/'>
                        <NavButtons> SE Practices </NavButtons>
                    </Link>
                </NavList>
            </NavBar>
        </HeaderContainer>
    );
};

export default Header;
