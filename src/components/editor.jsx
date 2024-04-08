"use client";
import {Coolshape, getRandomShape, shapes} from "coolshapes-react";
import {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {Dropdown} from "@/components/ui/dropdown";
import {Input} from "@/components/ui/input";
import {Toggle} from "@/components/ui/toggle";
import {Button} from "@/components/ui/button";

export default function Editor({initialShape}) {
  const [shape, setShape] = useState(initialShape);
  const [noise, setNoise] = useState(false);

  return (
    <Section>
      <ShapeWrapper>
        <Coolshape className="coolshape" index={shape.index} type={shape.shapeType} noise={noise}/>
      </ShapeWrapper>
      <MenuWrapper>
        <Dropdown
          label={"SHAPE"}
          text={shape.shapeType}
          items={Object.keys(shapes)}
          value={shape.shapeType}
          onChange={(type) => {
            const maxShapes = shapes[type].length - 1;
            const index = shape.index >  maxShapes? maxShapes: shape.index
            setShape({index, shapeType: type})
          }}
        />
        <div className={"index-noise-wrapper"}>
          <Input label={"index"} value={shape.index} onChange={(value) => {
            let index = Number(value);
            console.log(index)
            if (typeof index !== "number" || isNaN(index)) {
              return
            }
            let maxShapes = shapes[shape.shapeType].length;
            if (value < 0) {
              index = maxShapes - 1
            };
            if (value > maxShapes - 1) {
              index = maxShapes - 1
            }
            setShape({...shape, index: index })
          }} />

          <Toggle label={"noise"} onChange={(e) => {
            setNoise(e)
          }} value={noise}/>
        </div>
        <Button label={""} onClick={() => {
          setShape(getRandomShape({onlyId: true}))
        }}>
          <img src={"/random.svg"}/>
        </Button>
      </MenuWrapper>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;

const ShapeWrapper = styled.div`
  display: flex;
  border-radius: 40px;
  background: var(--primary-component-color);
  box-shadow: var(--component-box-shadow);
  padding: 30px;

  .coolshape {
    width: auto;
    height: 200px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  gap: 20px;
  width: 100%;
  justify-content: center;


  .index-noise-wrapper {
    display: flex;
    gap: 20px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 5.62rem;
    flex-direction: column;
    align-items: center;
    .index-noise-wrapper {
      justify-content: center;
      width: 100%;
    }
  }
`;
