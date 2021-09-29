import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: aquamarine;
    display: flex;
    justify-content: space-around;
    height: 8vh;
    border-color: black;
    border: 0px;
    border-bottom: 1px;
    border-style: transparent;
`;

export const LogoWrapper = styled.div`
    height: 100%;
`;
export const Logo = styled.img`
    height: 100%;
`;

export const NavBar = styled.div`
`;

export const NavList = styled.div`
    display: flex;
    align-items: center;
    padding-top: 25px;
    gap: 20px;
    height: 100%;
`;

export const NavItem = styled.li`
    color: black;
    transition: color 150ms;
    list-style: none;

    & hover {
        color: darkblue;
    }

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const NavButtons = styled(NavItem)`
    font-size: 20px;
    color: black;
`;
