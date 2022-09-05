import React from "react";
import Section from "./Section";

import model3 from "../../assets/bg/model-3.jpg";
import modely from "../../assets/bg/model-y.jpg";
import models from "../../assets/bg/model-s.jpg";
import modelx from "../../assets/bg/model-x.webp";
import solarpanels from "../../assets/bg/solar-panel.jpg";
import solarroof from "../../assets/bg/solar-roof.jpg";
import accessories from "../../assets/bg/accessories.jpg";

// main style className="snap-y"

function Content() {
  return (
    <main className="snap-y">
      <Section
        title="Model 3"
        alt="model 3"
        desc="Order Online for"
        descLink="touchless delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage={model3}
      />
      <Section
        title="Model Y"
        alt="model y"
        desc="Order Online for"
        descLink="touchless delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage={modely}
      />
      <Section
        title="Model S"
        alt="model S"
        desc="Order Online for"
        descLink="touchless delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage={models}
      />
      <Section
        title="Model X"
        alt="model x"
        desc="Order Online for"
        descLink="touchless delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage={modelx}
      />
      <Section
        title="Solar Panels"
        alt="solar panel"
        desc="Lowest Cost Solar Panels in America "
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImage={solarpanels}
      />
      <Section
        title="Solar Roof"
        alt=" Solar roof"
        desc=" Produce Clean Energy From Your Roof  "
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImage={solarroof}
      />
      <Section
        title="Accessories"
        alt=" accessories"
        leftBtnText="Shop Now"
        backgroundImage={accessories}
      />
    </main>
  );
}

export default Content;
