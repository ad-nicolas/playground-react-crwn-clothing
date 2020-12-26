import React, { Profiler } from "react";
import { HomePageContainer } from "./homepage.styles.jsx";

import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuraton) => {
        console.log({
          id,
          phase,
          actualDuraton,
        });
      }}
    >
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
