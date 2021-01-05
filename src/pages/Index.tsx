/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import debug from "debug";

import { Logger } from "../models/Logger";
import { Interval } from "../models/Interval";
import { Datetime } from "../models/Datetime";
import { Output } from "../models/Output";
import { TimingContainer } from "../components/TimingContainer";

import background from "./background.png";

const RootContainer = styled.div([tw`w-auto h-full`, `background-image: url(${background})`]);

const IndexPage = () => {
  const query = new URLSearchParams(window.location.search);
  const debugMode = query.has("debug") || query.has("debugMode");
  debug.enable(`${debugMode ? "timing:*" : "timing:*:error,timing:*:warn"}`);

  const logger = new Logger("page", "index");
  logger.debug("rendering");

  const interval = new Interval(query.get("interval") ?? "100ms");
  const endDate = Datetime.new(
    query.get("end") ?? query.get("endDate") ?? "endYear",
    query.get("format") ?? query.get("formatter")
  ).ms();
  const output = new Output(query.get("output"));

  logger.debug("initial end date as %o", endDate);
  logger.debug("initial interval as %o", interval);
  logger.debug("initial output   as %o", output);

  return (
    <RootContainer>
      <TimingContainer end={endDate} interval={interval} output={output} />
    </RootContainer>
  );
};

export { IndexPage };
