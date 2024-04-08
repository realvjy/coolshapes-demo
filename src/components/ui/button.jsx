import styled from "styled-components";
import { Label } from "@/components/ui/common";

export const Button = ({ children, label, onClick }) => {
  return (
    <Wrapper className="button-wrapper">
      <div>{label && <Label>{label}</Label>}</div>
      <ButtonWrapper className="button" onClick={onClick}>
        <InnerBackground className="inner-bg">{children}</InnerBackground>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.button`
  background: var(--primary-component-color);
  box-shadow: var(--component-box-shadow);
  padding: 1px;
  border-radius: 10px;
  display: inline-flex;
  margin-top: auto;
  color: var(--white);
  font-size: 10px;
`;

const InnerBackground = styled.div`
  padding: 12px 14px;
  font-size: 20px;
  background: linear-gradient(189.93deg, #ff3418 7.45%, #530000 92.55%);
  box-shadow: 1px 0 0 #000000, inset 0 -1px 0 rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  border-radius: 9px;
  &:hover {
    background: linear-gradient(189.93deg, #530000 7.45%, #ff3418 92.55%);
  }
`;
