"use client";
import { Coolshape, getRandomShape, shapes } from "coolshapes-react";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Dropdown } from "@/components/ui/dropdown";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-cloud9_night";
import "ace-builds/src-noconflict/ext-language_tools";
import { convertToCamelCase } from "./util";

export default function Editor({ initialShape }) {
  const [shape, setShape] = useState(initialShape);
  const [noise, setNoise] = useState(false);

  const codeSnippet1 = `import {Coolshape} from "coolshapes-react"
  
export const MyComponent = () =>{
  return (
    <Coolshape
      type="${shape.shapeType}"
      index={${shape.index}}
      noise={${noise}}
      size={100}
    />
  )
};`;

  const codeSnippet2 = `import {${convertToCamelCase(
    shape.shapeType
  )}} from "coolshapes-react"
  
export const MyComponent = () =>{
  return (
    <${convertToCamelCase(shape.shapeType)}
      index={${shape.index}}
      noise={${noise}}
      size={100}
    />
  )
};`;
  return (
    <Section>
      <ShapeWrapper>
        <Coolshape
          className="coolshape"
          index={shape.index}
          type={shape.shapeType}
          noise={noise}
        />
        {/* <div className="box"></div>
        <div className="box"></div>
        <div className="box2"></div> */}
      </ShapeWrapper>
      <MenuWrapper>
        <Dropdown
          label={"SHAPE"}
          text={shape.shapeType}
          items={Object.keys(shapes)}
          value={shape.shapeType}
          onChange={(type) => {
            const maxShapes = shapes[type].length - 1;
            const index = shape.index > maxShapes ? maxShapes : shape.index;
            setShape({ index, shapeType: type });
          }}
        />
        <div className={"index-noise-wrapper"}>
          <Input
            label={"index"}
            value={shape.index}
            onChange={(value) => {
              let index = Number(value);
              console.log(index);
              if (typeof index !== "number" || isNaN(index)) {
                return;
              }
              let maxShapes = shapes[shape.shapeType].length;
              if (value < 0) {
                index = maxShapes - 1;
              }
              if (value > maxShapes - 1) {
                index = maxShapes - 1;
              }
              if (value == maxShapes - 1) {
                index = 0;
              }
              setShape({ ...shape, index: index });
            }}
          />

          <Toggle
            label={"noise"}
            onChange={(e) => {
              setNoise(e);
            }}
            value={noise}
          />
        </div>
        <Button
          label={""}
          onClick={() => {
            setShape(getRandomShape({ onlyId: true }));
          }}
        >
          <img src={"/random.svg"} />
        </Button>
      </MenuWrapper>
      {/* <AceEditorWrap>
        <EditorBox>
          <ActionTitle>
            <h4>Option 1</h4>
            <h3>Copy</h3>
          </ActionTitle>
          <AceEditor
            mode="javascript"
            theme="cloud9_night"
            name="SVG_EDITOR"
            placeholder="Placeholder Text"
            style={{
              width: "380px",
              height: "260px",
              fontWeight: 100,
            }}
            fontSize={14}
            lineHeight={19}
            showPrintMargin={true}
            showGutter={false}
            highlightActiveLine={true}
            value={codeSnippet1}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
              readOnly: true,
              highlightActiveLine: false,
            }}
          />
        </EditorBox>
      </AceEditorWrap> */}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`;

const ShapeWrapper = styled.div`
  display: flex;
  border-radius: 40px;
  background: var(--primary-component-color);
  box-shadow: var(--component-box-shadow);
  padding: 30px;
  position: relative;
  overflow: hidden;
  .box {
    content: "";
    position: absolute;
    width: 250px;
    height: 120px;
    border-radius: 18px;
    background: linear-gradient(
      180deg,
      #fff9f9 0%,
      rgba(255, 255, 255, 0) 100%
    );
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    filter: blur(12px);
    mix-blend-mode: overlay;
  }
  .box2 {
    content: "";
    position: absolute;
    width: 230px;
    height: 40px;
    background: linear-gradient(
      180deg,
      #fff9f9 0%,
      rgba(255, 255, 255, 0) 100%
    );
    left: 50%;
    top: 40px;
    border-radius: 18px;
    transform: translateX(-50%);
    filter: blur(5px);
    mix-blend-mode: overlay;
  }
  .coolshape {
    width: auto;
    height: 250px;
    @media screen and (max-width: 768px) {
      height: 180px;
    }
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
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
    .index-noise-wrapper {
      justify-content: center;
      width: 100%;
    }
  }
`;

const AceEditorWrap = styled.div`
  margin-top: 100px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .ace_selection {
    background-color: rgba(255, 0, 0, 0.5); /* Red with 50% opacity */
  }
`;

const EditorBox = styled.div`
  border-radius: 6px;
  background: #181818;
  display: flex;
  padding: 20px;
  gap: 12px;
  flex-direction: column;
`;

const ActionTitle = styled.div`
  display: flex;
  background: red;
  flex-direction: row;
  justify-content: space-between;
`;
