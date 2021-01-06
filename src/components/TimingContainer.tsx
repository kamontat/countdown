/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import tw from "twin.macro";

import { Datetime } from "../models/Datetime";
import { Interval } from "../models/Interval";
import { Output } from "../models/Output";
import { Property } from "../models/Property";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { TimingElement } from "./TimingElement";

interface TimingContainerProperty extends Property {
  end: number;
  interval: Interval;
  output: Output;
}

const RootContainer = tw.div`
  w-full h-full flex flex-col
`;

const Container = tw.div`
  h-full flex items-center justify-center
  m-2
`;

const ElementContainer = tw.div`
  flex flex-col md:flex-row flex-1 lg:max-w-screen-lg
`;

// const Container = tw.div`
//   w-auto h-full flex items-center justify-center text-center
//   bg-fixed bg-cover bg-gradient-to-b
// `;

const TimingContainer = ({ end, interval, output }: TimingContainerProperty) => {
  const [current, setCurrent] = useState(Datetime.timestamp());
  const [diff, setDiff] = useState(end - current);

  useEffect(() => {
    const timer = setInterval(() => {
      const newCurrent = Datetime.timestamp();
      setCurrent(newCurrent);
      setDiff(end - newCurrent);
    }, interval.ms());

    return () => clearInterval(timer);
  });

  const outputs = output.format(diff);
  const size = outputs.length;
  return (
    <RootContainer>
      <Header timestamp={current} />
      <Container>
        <ElementContainer>
          {outputs.map(o => (
            <TimingElement size={size} key={o.shortUnit} output={o} />
          ))}
        </ElementContainer>
      </Container>
      <Footer />
    </RootContainer>
  );
};

export { TimingContainer };
