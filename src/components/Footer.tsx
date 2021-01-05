/** @jsxImportSource @emotion/react */
import "twin.macro";

import pjson from "../../package.json";

const Footer = () => {
  return (
    <span tw="mb-3 mr-3 text-base text-right font-mono text-white">
      Create by Kamontat Chantrachirathumrong{" "}
      <a tw="text-indigo-300 hover:text-indigo-900" href="https://kamontat.net">
        kamontat.net
      </a>{" "}
      (v{pjson.version})
    </span>
  );
};

export { Footer };
