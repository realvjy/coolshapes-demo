"use client";
import styled from "styled-components";

export default function Footer() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          made with
          <span>
            <a href="https://coolshap.es?ref=demo">
              <img src={"coolshape-logo.svg"} />
            </a>
          </span>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.footer`
  padding: 10px 0px;
  margin-top: auto;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  color: #535353;
  text-shadow: 0 1px 0 #000000, 0 -1px 0 #797979;
  margin: 0.5rem;
  span {
    margin-left: 20px;
    transform: translateY(-8px) scale(1.5);
  }
`;
