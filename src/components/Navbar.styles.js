import styled from 'styled-components';
import { colors, device } from '../App.styles';

export const StyledNav = styled.nav`
  background-color: #def;
  .wrapper {
    position: relative;
    .logo-burger-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      font-size: 1.6rem;
      .logo {
        display: flex;
        align-items: center;
      }
      .burger {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        font-size: 1.6rem;
        transition: 0.4s;
        cursor: pointer;
        :hover {
          transform: rotate(90deg);
        }
      }
      .social-icon-container {
        display: none;
      }
    }
    .menu-wrapper {
      overflow: hidden;
      height: 0;
      transition: 0.4s;
      .menu {
        li {
          a {
            padding: 0.5rem;
            display: inline-block;
            width: 100%;
            text-decoration: none;
            :hover {
              background-color: ${colors.white};
            }
          }
        }
      }
    }
  }

  /* MEDIA */
  @media ${device.tablet} {
    .wrapper {
      .menu-wrapper {
        transition: 0s;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto !important;
        .menu {
          display: flex;
        }
      }
      .logo-burger-container {
        .burger {
          display: none;
        }
        .social-icon-container {
          display: flex;
        }
      }
    }
  }
`;
