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
import * as copy from "copy-to-clipboard";

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

  function copyCode(newCode) {
    console.log("Here some text");
    try {
      copy(newCode);
    } catch (error) {
      // Handle any errors that may occur during the copy(viewCode) operation
      console.error("Copy failed:", error);
    }
  }
  return (
    <Section>
      <ShapeWrapper>
        <Coolshape
          className="coolshape"
          index={shape.index}
          type={shape.shapeType}
          noise={noise}
        />
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
      <AceEditorWrap>
        <EditorBox>
          <ActionTitle>
            <h4>Method 1</h4>
            <h3 onClick={() => copyCode(codeSnippet1)}>
              <img src="/copy.svg" /> copy
            </h3>
          </ActionTitle>
          <AceEditor
            mode="javascript"
            theme="cloud9_night"
            name="SVG_EDITOR"
            placeholder="Placeholder Text"
            style={{
              width: "380px",
              height: "220px",
              fontWeight: 100,
            }}
            fontSize={14}
            lineHeight={18}
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
        <EditorBox>
          <ActionTitle>
            <h4>Method 2</h4>
            <h3 onClick={() => copyCode(codeSnippet2)}>
              <img src="/copy.svg" /> copy
            </h3>
          </ActionTitle>
          <AceEditor
            mode="javascript"
            theme="cloud9_night"
            name="SVG_EDITOR"
            placeholder="Placeholder Text"
            style={{
              width: "380px",
              height: "220px",
              fontWeight: 100,
            }}
            fontSize={14}
            lineHeight={18}
            showPrintMargin={true}
            showGutter={false}
            highlightActiveLine={true}
            value={codeSnippet2}
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
      </AceEditorWrap>
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
  margin-top: 50px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    transform: scale(0.8);
    margin-top: 20px;
  }
  /* background: var(--primary-component-color); */
  /* box-shadow: var(--component-box-shadow); */
  .ace_selection {
  }
`;

const EditorBox = styled.div`
  border-radius: 12px;
  background: #181818;
  display: flex;
  padding: 20px;
  gap: 12px;
  flex-direction: column;
  /* background: var(--primary-component-color); */
  box-shadow: var(--component-box-shadow);
`;

const ActionTitle = styled.div`
  display: flex;
  /* background-color: rgba(93, 93, 93, 0.5);  */
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
  img {
    height: 16px;
  }
  h4 {
    color: #535353;
    font-size: 14px;
    letter-spacing: 1px;
    text-shadow: 0 2px 0 #000000, 0 -1px 0 #797979;
    font-weight: 500;
    text-transform: uppercase;
  }
  h3 {
    font-size: 14px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const CopyBtn = styled.button``;
