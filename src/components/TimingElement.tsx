/** @jsxImportSource @emotion/react */
import tw, { styled, TwStyle } from "twin.macro";

import { OutputObject } from "../models/Output";
import { Property } from "../models/Property";
import { GlassilyContainer, GlassilyText } from "./Glassily";

interface TimingElementProperty extends Property {
  size: number;
  output: OutputObject;
}

const mapper: Record<number, TwStyle> = {
  0: tw`md:w-full`,
  1: tw`md:w-full`,
  2: tw`md:w-1/2`,
  3: tw`md:w-1/3`,
  4: tw`md:w-1/4`,
  5: tw`md:w-1/5`,
  6: tw`md:w-1/6`,
};

const Container = styled.div([
  opt => mapper[opt["aria-colcount"] ?? 0] ?? mapper[0],
  tw`mx-1 my-2 md:m-0`,
  tw`flex justify-center`,
]);

const Number = styled(GlassilyText)([tw`proportional-nums`]);

const Unit = styled(GlassilyText)([tw`font-bold`]);

const TimingElement = ({ output, size }: TimingElementProperty) => {
  const formatNumber = (n: number, digit: number) => {
    return String(n).padStart(digit, "0");
  };
  return (
    <Container aria-colcount={size}>
      <GlassilyContainer>
        <Number>{formatNumber(output.number, output.digit)}</Number>
        <Unit>{output.unit}</Unit>
      </GlassilyContainer>
    </Container>
  );
};

export { TimingElement };
