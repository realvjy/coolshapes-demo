"use client";

import { Button } from '@/components/ui/button';
import { Coolshape } from 'coolshapes-react';
import Link from 'next/link'
import styled from "styled-components"

export default function NotFound() {
    return (
        <NoSection className='main'>
            <svg xmlns="http://www.w3.org/2000/svg" id="texture" className="noise">
                <filter id="noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.5"
                        numOctaves="3"
                        stitchTiles="stitch"
                    ></feTurbulence>
                    <feColorMatrix type="saturate" values="0"></feColorMatrix>
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)"></rect>
            </svg>
            <NoContainer>
                <NoWrapper>
                    <h2>404</h2>
                    <Button href="/">Back Home</Button>
                </NoWrapper>
            </NoContainer>
        </NoSection>
    )
}


const NoSection = styled.section`
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto 0;
  @media screen and (max-width: 1020px) {
    padding: 0 20px;
  }
`;


const NoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 0;
    gap: 12px;
    h2{
        font-size: 54px;
        font-weight: 400;
        margin-bottom: 20px;
        text-align: center;
    }
    /* margin: 0 auto; */
    @media screen and (max-width: 768px) {
      padding: 12px;
      h2{
        font-size: 20px;
      }
    }
`;
const NoContainer = styled.div`
    min-height: 100vh;
    display: flex;
    overflow: hidden;
`

