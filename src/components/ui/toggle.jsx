import styled from "styled-components";
import {Label} from "@/components/ui/common";


export const Toggle = ({value, onChange, label}) => {

  return (
    <Wrapper>
      {label && <Label>
        {label}
      </Label>}
      <ToggleWrapper className={value? "active": ""} >
        <ToggleElement className={"element"} onClick={()=>onChange(!value)}>
          <div className={"icon-wrapper"}>
            <div className={"line"}/>
            <div className={"line"}/>
            <div className={"line"}/>
            <div className={"glare"}>
              <div/>
              <div/>
              <div/>
            </div>
          </div>
        </ToggleElement>
      </ToggleWrapper>
    </Wrapper>
  )
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

const ToggleWrapper = styled.div`
  background: var(--primary-component-color);
  box-shadow: var(--component-box-shadow);
  border-radius: 10px;
  padding: 1px;
  display: flex;
  height: 100%;
  &.active{
    .element{
      margin-left: 40%;
    }
    .icon-wrapper{
      .glare{
        opacity: 1;
        div{
          background: #FF4646;
          mix-blend-mode: normal;
          filter: blur(2px);
        }
      }
      .line{
        background: linear-gradient(189.93deg, #FFF065 7.45%, #FF0E00 49.15%, #780000 92.55%);
      }
    }
  }
`;

const ToggleElement = styled.div`
  height: 100%;
  border-radius: 9px;
  background: var(--secondary-bg-color);
  width: 60%;
  box-shadow: var(--secondary-component-shadow);
  margin-left: 0;
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background: var(--secondary-bg-color-rv);
  }
  .icon-wrapper{
    display: flex;
    height: 45%;
    gap: 6px;
    position: relative;
    .line{
      width: 3px;
      height: 100%;
      background: #252A30;
      box-shadow: 1px 0 1px rgba(0, 0, 0, 0.35), inset 1px 0 1px rgba(82, 82, 82, 0.45);
      border-radius: 2px;
    };
    .glare{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      gap: 6px;
      opacity: 0;
      transition: all 200ms ease-in-out;
      div{
        width: 3px;
        height: 100%;
        border-radius: 2px;
      }
    }
  }
`;

