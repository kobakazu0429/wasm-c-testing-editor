import React, { FC, useState, useCallback } from "react";
import { Flex } from "@chakra-ui/core";
import { EditorPanel } from "@/components/panes/Editor";
import { Header } from "@/components/Header";

export const TopPage: FC = () => {
  const [value, setValue] = useState<string>("");
  const onUpdatevalue = useCallback(
    (newvalue: string) => {
      setValue(newvalue);
    },
    [value]
  );

  return (
    <>
      <Flex direction="column" w="100%" h="100%">
        <Flex>
          <Header onClickTab={console.log} />
        </Flex>
        <Flex h="100%" w="100%">
          <EditorPanel
            name="src"
            value={value}
            onUpdate={onUpdatevalue}
            focusWithDidMount
          />
          <EditorPanel name="test" value={value} onUpdate={onUpdatevalue} />
        </Flex>
      </Flex>
    </>
  );
};
