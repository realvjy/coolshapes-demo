import styled from "styled-components";
import { Label } from "@/components/ui/common";

export const Input = ({ label, value, onChange }) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <input
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <div className={"btn-wrapper"}>
          <div className={"up"} onClick={() => onChange(value + 1)}>
            <img src={"/arrow-up.svg"} alt={"+"} />
          </div>
          <div className={"down"} onClick={() => onChange(value - 1)}>
            <img src={"/arrow-down.svg"} alt={"-"} />
          </div>
        </div>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85px;
`;
const InputWrapper = styled.div`
  background: var(--primary-component-color);
  box-shadow: var(--component-box-shadow);
  padding: 1px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  input {
    width: 100%;
    height: 100%;
    padding: 12px 14px;
    font-size: 20px;
    background: transparent;
    border: none;
    color: white;
  }
  .btn-wrapper {
    display: flex;
    border-radius: 1px 9px 9px 1px;
    flex-direction: column;
    width: 100%;
    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        cursor: pointer;
      }
    }
    .up {
      transform: translateY(4px);
    }
    .down {
      transform: translateY(-4px);
    }
    background: var(--secondary-bg-color);
    box-shadow: var(--secondary-component-shadow);
    &:hover {
      background: var(--secondary-bg-color-rv);
    }
  }
`;
