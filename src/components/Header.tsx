import React from "react";
import { Flex, Button, ButtonGroup } from "@chakra-ui/core";

type EXEC = "compile" | "run" | "test" | "compileRun" | "compileTest";

export function Header(props: { onClickTab: (exec: EXEC) => void }) {
  return (
    <Flex w="100%">
      <ButtonGroup p={1}>
        <Button size="sm" onClick={() => props.onClickTab("compile")}>
          Compile
        </Button>
        <Button size="sm" onClick={() => props.onClickTab("run")}>
          Run
        </Button>
        <Button size="sm" onClick={() => props.onClickTab("test")}>
          Test
        </Button>
        <Button size="sm" onClick={() => props.onClickTab("compileRun")}>
          Compile &amp; Run
        </Button>
        <Button size="sm" onClick={() => props.onClickTab("compileTest")}>
          Compile &amp; Test
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
