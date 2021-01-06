/** @jsxImportSource @emotion/react */
import "twin.macro";

import { author, name, version, repository } from "../../package.json";

const Footer = () => {
  return (
    <span tw="mb-4 mr-4 text-base text-right font-mono text-white">
      Create by {author.name}{" "}
      <a tw="text-indigo-300 hover:text-indigo-900" href={author.url} target="_blank" rel="noreferrer">
        {author.url}
      </a>
      <br />
      <a tw="text-indigo-300 hover:text-indigo-900" href={repository.url} target="_blank" rel="noreferrer">
        {name}
      </a>{" "}
      v{version}
    </span>
  );
};

export { Footer };
