/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Property } from "../models/Property";

interface HeaderProperty extends Property {
  timestamp: number;
}

const Header = ({ timestamp }: HeaderProperty) => {
  return <span tw="mt-4 mr-4 text-base text-right font-mono text-white">{timestamp}</span>;
};

export { Header };
