import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 10px;
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  font-family: ubuntu;

  &.active {
    color: #F5F4FA;
  }
  transition: transform var(--transition);
    &:hover,
    &:focus {
        transform: scale(1.07);
    }
`;