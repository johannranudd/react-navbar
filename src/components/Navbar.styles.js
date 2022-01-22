import styled from 'styled-components';
import { colors, device } from '../App.styles';

export const StyledNav = styled.nav`
  position: relative;
  background: #def;
  height: 5rem;
  overflow: hidden;
  transition: 0.5s;
  .wrapper {
    position: absolute;
    top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.6rem 2rem;
    .logo {
      a {
        transition: 0.4s;
        display: flex;
        align-items: center;
        color: ${colors.black};
        padding: 0;
        :hover {
          color: ${colors.white};
        }
      }
      .logo-icon {
        font-size: 2rem;
      }
    }
    .menu {
      position: absolute;
      top: 5rem;
      left: 0;
      width: 100%;
      li {
        transition: 0.5s;
        a {
          display: inline-block;
          text-decoration: none;
          color: ${colors.black};
          width: 100%;
          padding: 0.5rem 1rem;
          transition: 0.5s;
          :hover {
            color: ${colors.blue};
          }
        }
        :hover {
          background-color: ${colors.white};
          padding-left: 1rem;
        }
      }
    }

    .icons-container {
      display: none;
    }
    .menu-btn {
      display: flex;
      background-color: transparent;
      border: none;
      transition: 0.4s;
      font-size: 1.7rem;
      padding: 0;
      cursor: pointer;
      :hover {
        transform: rotate(90deg);
      }
    }
  }

  @media ${device.tablet} {
    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .menu {
        position: relative;
        top: 0;
        display: flex;
        justify-content: space-between;
        li {
          a {
          }
          :hover {
            background-color: transparent;
            padding-left: 0;
          }
        }
      }
      .icons-container {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        a {
          display: flex;
          font-size: 1.3rem;
          padding: 0 0.5rem;
        }
      }
      .menu-btn {
        display: none;
      }
    }
  }
`;
