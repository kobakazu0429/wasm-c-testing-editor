import React, { FC } from "react";
import { CSSReset, DarkMode, ThemeProvider } from "@chakra-ui/core";
import { createRouter } from "@/routes";
import { TopPage } from "@/pages/TopPage";

const routes = [
  {
    exact: true,
    path: "/",
    component: TopPage
  }
];

const Router = createRouter({ routes });

export const App: FC = () => {
  return (
    <DarkMode>
      <ThemeProvider>
        <CSSReset />
        {Router}
      </ThemeProvider>
    </DarkMode>
  );
};
