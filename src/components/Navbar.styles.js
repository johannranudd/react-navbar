import styled from 'styled-components';
import { colors, device } from '../App.styles';

export const StyledNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background: #def;
  overflow: hidden;
  transition: 0.4s;
  .wrapper {
    position: absolute;
    top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.6rem 1rem;
    .menu {
      position: absolute;
      top: 5rem;
      a {
        text-decoration: none;
        color: ${colors.black};
        padding: 0.5rem;
      }
    }

    .icons-container {
      display: none;
    }
    .menu-btn {
      transition: 0.5s;
      :hover {
        transform: rotate(90deg);
      }
    }
  }

  @media ${device.tablet} {
    .wrapper {
      .menu {
        display: flex;
        position: relative;
        top: 0;
      }
      .icons-container {
        display: block;
      }
      .menu-btn {
        display: none;
      }
    }
  }
`;
