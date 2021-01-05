/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Property } from "../models/Property";

interface HeaderProperty extends Property {
  timestamp: number;
}

const Header = ({ timestamp }: HeaderProperty) => {
  return <span tw="mb-3 mr-3 text-base text-right font-mono text-white">{timestamp}</span>;
};

export { Header };
