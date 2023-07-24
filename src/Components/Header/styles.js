import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #ffffff;
 
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 2rem;
  gap: 16px;
`;

export const NavBar = styled.nav`
font-family:  'Arial Narrow Bold', sans-serif;
font-size: 1.2rem;
  width: 25%;
  a {
    text-decoration: none;
    :hover {
      color: orange;
    }
  }
`;
export const OptionsList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
`;
