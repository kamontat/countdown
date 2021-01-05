/** @jsxImportSource @emotion/react */
import "twin.macro";

import pjson from "../../package.json";

const Footer = () => {
  return (
    <span tw="mb-4 mr-4 text-base text-right font-mono text-white">
      Create by {pjson.author.name}{" "}
      <a tw="text-indigo-300 hover:text-indigo-900" href={pjson.author.url}>
        {pjson.author.url}
      </a>
      <br />
      {pjson.name} v{pjson.version}
    </span>
  );
};

export { Footer };
