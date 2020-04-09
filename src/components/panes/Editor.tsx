import React, { Suspense } from "react";
import { Flex, Text, Divider } from "@chakra-ui/core";
const MonacoEditor = React.lazy(() => import("../editor/MonacoEditor"));

export function EditorPanel(props: {
  name: string;
  value: string;
  onUpdate: (content: string) => void;
  focusWithDidMount?: boolean;
  language: string;
}) {
  return (
    <Flex h="100%" w="100%" direction="column">
      <Flex h="18px" w="100%">
        <Text
          alignItems="center"
          justifyContent="center"
          d="inline-flex"
          h="100%"
        >
          {props.name}
        </Text>
      </Flex>
      <Divider />
      <Flex h="calc(100% - 18px)" w="100%">
        <Suspense fallback="">
          <MonacoEditor
            key={props.name}
            value={props.value}
            language={props.language}
            onChangeValue={value => props.onUpdate(value)}
            focusWithDidMount={props.focusWithDidMount}
          />
        </Suspense>
      </Flex>
    </Flex>
  );
}
