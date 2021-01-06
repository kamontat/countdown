/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Property } from "../models/Property";

interface HeaderProperty extends Property {
  name: string;
  timestamp: number;
}

const Container = tw.div`
  flex justify-between
`;

const Text = tw.span`
  m-4 text-base font-mono text-white
`;

const Header = ({ name, timestamp }: HeaderProperty) => {
  return (
    <Container>
      <Text>{name}</Text>
      <Text>{timestamp}</Text>
    </Container>
  );
};

export { Header };
