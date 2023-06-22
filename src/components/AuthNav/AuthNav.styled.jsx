import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 700;

  &.active {
    color: var(--accent-color);
  }
  transition: transform var(--transition);
    &:hover,
    &:focus {
        transform: scale(1.05);
    }
`;