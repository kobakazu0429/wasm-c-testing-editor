import React, { FC, useState, useCallback } from "react";
import { Flex } from "@chakra-ui/core";
import { Header } from "@/components/Header";
import { EditorPanel } from "@/components/panes/Editor";
import { run } from "@/wasm";

import { addTestRaw } from "@/templates/add_test";
import { addCRaw } from "@/templates/add_c";

export const TopPage: FC = () => {
  const [src, setSrc] = useState<string>(addCRaw);
  const [test, setTest] = useState<string>(addTestRaw);
  const onUpdateSrc = useCallback(
    (newSrc: string) => {
      setSrc(newSrc);
    },
    [src]
  );
  const onUpdateTest = useCallback(
    (newTest: string) => {
      setTest(newTest);
    },
    [test]
  );

  const Compile = useCallback(() => {
    (async () => {
      await run(src);
    })();
  }, [src]);

  return (
    <>
      <Flex direction="column" w="100%" h="100%">
        <Flex>
          <Header onClickTab={Compile} />
        </Flex>
        <Flex h="100%" w="100%">
          <EditorPanel
            name="src"
            value={src}
            onUpdate={onUpdateSrc}
            focusWithDidMount
            language="c"
          />
          <EditorPanel
            name="test"
            value={test}
            onUpdate={onUpdateTest}
            language="javascript"
          />
        </Flex>
      </Flex>
    </>
  );
};
