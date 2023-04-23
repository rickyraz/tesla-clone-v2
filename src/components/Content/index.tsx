import React from "react";
import Section from "./Section";

import model3 from "../../assets/bg/model-3.webp";
import modely from "../../assets/bg/model-y.webp";
import models from "../../assets/bg/model-s.webp";
import modelx from "../../assets/bg/model-x.webp";
import solarpanels from "../../assets/bg/solar-panel.webp";
import solarroof from "../../assets/bg/solar-roof.webp";
import accessories from "../../assets/bg/accessories.webp";

function Content() {
  return (
    <main className="h-screen w-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden">
      <Section
        title="Model Y"
        alt="model y"
        descLink="View Inventory"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
        backgroundImage={modely}
        key="2"
      />
      <Section
        title="Model 3"
        alt="model 3"
        descLink="View Inventory"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
        backgroundImage={model3}
        key="1"
      />
      <Section
        title="Model Y"
        alt="model y"
        descLink="View Inventory"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
        backgroundImage={modely}
        key="2"
      />

      <Section
        title="Model S"
        alt="model S"
        descLink="View Inventory"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
        backgroundImage={models}
        key="3"
      />
      <Section
        title="Model X"
        alt="model x"
        descLink="View Inventory"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
        backgroundImage={modelx}
        key="4"
      />
      <Section
        title="Solar Panels"
        alt="solar panel"
        desc="Lowest Cost Solar Panels in America "
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImage={solarpanels}
        key="5"
      />
      <Section
        title="Solar Roof"
        alt=" Solar roof"
        desc=" Produce Clean Energy From Your Roof  "
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImage={solarroof}
        key="6"
      />
      <Section
        title="Accessories"
        alt="accessories"
        leftBtnText="Shop Now"
        rightBtnText=""
        backgroundImage={accessories}
        key="7"
      />
    </main>
  );
}

export default Content;
