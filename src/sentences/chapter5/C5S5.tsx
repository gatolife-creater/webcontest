import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";

export const C5S5 = () => {
  return (
    <Main>
      <MiniSectionTitle>IoT</MiniSectionTitle>

      <Pager
        direction="back"
        text="第四節"
        link="/content.html?chapter=5&section=1"
      />
      <Pager direction="forward" text="参考文献" link="#" />
    </Main>
  );
};