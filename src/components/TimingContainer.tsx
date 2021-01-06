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
  end: Datetime;
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

const TimingContainer = ({ end, interval, output }: TimingContainerProperty) => {
  const [current, setCurrent] = useState(Datetime.timestamp());
  const [diff, setDiff] = useState(end.ms() - current);

  const millisecond = interval.ms() ?? 100;
  useEffect(() => {
    const timer = setInterval(() => {
      const newCurrent = Datetime.timestamp();
      setCurrent(newCurrent);
      setDiff(end.ms() - newCurrent);
    }, millisecond);

    return () => clearInterval(timer);
  });

  const outputs = output.format(diff);
  const size = outputs.length;
  return (
    <RootContainer>
      <Header name={end.name} timestamp={current} />
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
