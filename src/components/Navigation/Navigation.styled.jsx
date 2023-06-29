import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  margin: 6px 5px;
  text-decoration: none;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  font-family: ubuntu;
  @media (min-width: 600px) {
    font-size: 18px;
    margin: 8px 10px;
  }
  &.active {
    color: #F5F4FA;
  }
  transition: transform var(--transition);
    &:hover,
    &:focus {
        transform: scale(1.07);
    }
`;