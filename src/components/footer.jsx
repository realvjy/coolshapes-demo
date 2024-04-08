'use client'
import styled from "styled-components"

export default function Footer(){

  return(
    <Section>
      <div className="container">
        <Wrapper>
          made with <span><img src={"coolshape-logo.svg"}/></span>
        </Wrapper>
      </div>
    </Section>
  )
}

const Section = styled.footer`
  padding: 10px 0px;
  margin-top: auto;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  color: #515151;
  text-shadow: 0 1px 0 #000000, 0 -0.5px 0 #D7D7D7;
  margin: 0.5rem;
  span{
    margin-left: 7.5px;
    transform: translateY(-10px);
  }
`;