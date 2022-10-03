import React, {memo} from "react";
import styled from "styled-components";
import {TTheme} from "../../theme";
import {ILink} from "../../models/ILink";
import {useLocation} from "react-router-dom";

const NavBoxWrapper = styled.div`
  margin-bottom: 2rem;

  strong {
    display: block;
    margin-left: 1rem;
    color: ${({theme}: { theme: TTheme }) => theme.bright};
    text-transform: uppercase;
    font-size: .9rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      padding-left: 1rem;
      position: relative;

      &::before {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 2px;
        transform: translateX(-2px);
        transition: all .5s 0s ease;
        background-color: ${({theme}: { theme: TTheme }) => theme.primary};
      }

      &._activate, &:hover {

        &:before {
          transform: translateX(0px);
        }

        a {
          color: ${({theme}: { theme: TTheme }) => theme.primary};
        }
      }
    }

    li > a {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 40px;
      color: ${({theme}: { theme: TTheme }) => theme.smooth};
      font-size: .9em;
      transition: all .5s 0s ease;
    }
  }
`;

type NavBoxProps = {
    children?: JSX.Element;
    boxName: string;
    list: Array<Partial<ILink>>;
}

const NavBox = ({children, boxName, list}: NavBoxProps) => {

    const {pathname} = useLocation();

    return <NavBoxWrapper>
        <strong>{boxName}</strong>
        {children}
        <ul>
            {
                list.map((item, index) => (
                    <li key={index} className={pathname === item?.link ? "_activate" : ""}>
                        <a href={item?.link ?? "/"}>{item?.icon}<span>{item?.title}</span></a>
                    </li>
                ))
            }
        </ul>
    </NavBoxWrapper>

}

export default memo(NavBox);
