import styled from "styled-components";
import { Label } from "@/components/ui/common";
import { useEffect, useRef, useState } from "react";

export const Dropdown = ({ label, items, value, onChange }) => {
  const [isHidden, setHidden] = useState(true);
  const dropdownRef = useRef(null);
  const [currentItem, setItem] = useState(value);

  useEffect(() => {
    onChange(currentItem);
  }, [currentItem]);

  useEffect(() => {
    setItem(value);
  }, [value]);

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <DropDownButton
        onClick={() => {
          setHidden(!isHidden);
        }}
      >
        <div className={"text"}>{currentItem}</div>
        <div className={"icon-wrapper"}>
          <img src={isHidden ? "/arrow-bottom.svg" : "/arrow-up.svg"} />
        </div>
      </DropDownButton>
      <DropDownWrapper>
        <DropDown className={isHidden ? "hidden" : ""} ref={dropdownRef}>
          <DropDownInnerWrapper>
            <DropDownListWrapper>
              {items.map((item, _i) => {
                return (
                  <DropDownItem
                    key={item + _i}
                    onClick={() => {
                      setItem(item);
                      setHidden(true);
                    }}
                  >
                    {item}
                  </DropDownItem>
                );
              })}
            </DropDownListWrapper>
          </DropDownInnerWrapper>
          <div className={"gradient"}>
            <div className={"top"} />
            <div className={"bottom"} />
          </div>
        </DropDown>
      </DropDownWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  width: 100%;
`;

const DropDownButton = styled.div`
  background: var(--primary-component-color);
  box-shadow: var(--component-box-shadow);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px;
  width: 100%;

  .text {
    padding: 12px 14px;
    font-size: 20px;
    text-transform: capitalize;
  }

  .icon-wrapper {
    display: flex;
    border-radius: 1px 9px 9px 1px;

    img {
      margin: 0 13px;
    }

    background: var(--secondary-bg-color);
    box-shadow: var(--secondary-component-shadow);

    &:hover {
      background: var(--secondary-bg-color-rv);
    }
  }
`;

const DropDownWrapper = styled.div`
  position: relative;
  display: flex;
`;

const DropDown = styled.div`
  position: absolute;
  margin-top: 1rem;
  width: 100%;
  background: #1b1e21;
  box-shadow: 0 12px 8px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.33),
    0 1px 0 rgba(0, 0, 0, 0.82), inset 0 1px 1px rgba(138, 138, 138, 0.25),
    inset 0 -1px 1px #414141;
  border-radius: 10px;
  height: 220px;
  padding: 0.43rem 0.56rem;
  opacity: 1;
  transition: all 400ms ease-in-out;
  z-index: 8;

  &.hidden {
    margin: 0;
    height: 0;
    padding: 0;
    opacity: 0;
  }

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px;

    div {
      height: 20%;

      &.top {
        border-radius: 0.25rem 0.25rem 0 0;
        background: linear-gradient(to bottom, #1b1e21, transparent);
      }
      &.bottom {
        border-radius: 0 0 0.25rem 0.25rem;
        background: linear-gradient(to top, #1b1e21, transparent);
      }
    }
  }
`;
const DropDownInnerWrapper = styled.div`
  overflow: scroll;
  max-height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const DropDownListWrapper = styled.ul`
  padding: 8px;
`;
const DropDownItem = styled.li`
  padding: 0.62rem 0;
  font-size: 1em;
  border-bottom: 0.5px solid rgba(82, 82, 82, 0.4);
  box-shadow: inset 0 -1px black;
  color: rgba(255, 255, 255, 0.67);
  text-shadow: 0 1px 0 #000000;
  text-transform: capitalize;
  font-weight: 400;
  cursor: pointer;
  &:last-child {
    border: none;
    box-shadow: none;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.47);
  }
`;
