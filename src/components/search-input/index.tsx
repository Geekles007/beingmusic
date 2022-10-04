import React, {ChangeEvent, memo, useCallback, useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import {BiSearch} from "react-icons/all";
import useOutsideClick from "../../hooks/use-outside-click";
import {debounce} from "lodash";

const SearchInputWrapper = styled.div<{ active: boolean }>`
  width: ${({active}) => active ? `250px` : `35px`};
  height: 35px;
  border-radius: 35px;
  background-color: ${({theme}) => theme.dark};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  overflow: hidden;
  cursor: pointer;
  position: relative;
  
  transition: all .5s 0s ease-in-out;

  .search--icon {
    position: absolute;
    left: 7.5px;
  }

  .search--input {
    width: 0;
    position: relative;
    margin-left: 36px;
    border: none;
    height: 100%;
    background-color: ${({theme}) => theme.dark};
    outline: none;
    flex: 1;
    ${({active}) => {
      if (active)
        return css`display: block; width: 100%;`;
    }}
`;

type SearchInputProps = {}

const SearchInput = ({}: SearchInputProps) => {
    const [active, setActive] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>();
    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useOutsideClick(ref, () => {
        if(inputRef.current?.value === "" || inputRef.current?.value === undefined) {
            setActive(false);
        }
    });

    useEffect(() => {
        setSearchText(old => old);
        console.log(">>", searchText)
    }, [searchText])

    const openSearch = useCallback(() => {
        setActive(true);
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [setActive])

    const makeSearch = useCallback(debounce((e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target?.value;
        setSearchText(old => val);
    }, 500), [searchText])

    return <SearchInputWrapper onClick={openSearch} active={active} ref={ref}>
        <BiSearch className={"search--icon"} size={18}/>
        <input ref={inputRef} onChange={makeSearch} autoFocus={active} className={"search--input"} type="text" placeholder={"Search..."}/>
    </SearchInputWrapper>

}

export default memo(SearchInput);
