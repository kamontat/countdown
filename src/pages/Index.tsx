/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import debug from "debug";

import { Logger } from "../models/Logger";
import { Interval } from "../models/Interval";
import { Datetime } from "../models/Datetime";
import { Output } from "../models/Output";
import { TimingContainer } from "../components/TimingContainer";

import background from "../images/background.png";
import { SpecialDay } from "../models/SpecialDay";

const RootContainer = styled.div([
  tw`w-auto min-h-full h-full`,
  tw`bg-fixed bg-cover bg-center`,
  `background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.05)), url(${background})`,
]);

const IndexPage = () => {
  const query = new URLSearchParams(window.location.search);
  const debugMode = query.has("debug") || query.has("debugMode");
  debug.enable(`${debugMode ? "timing:*" : "timing:*:error,timing:*:warn"}`);

  const logger = new Logger("page", "index");
  logger.debug("rendering");

  const interval = new Interval(query.get("interval"));

  const specialDay = new SpecialDay();
  const endDate = Datetime.new(
    specialDay,
    query.get("end") ?? query.get("endDate") ?? "endYear",
    query.get("format") ?? query.get("formatter")
  ).ms();
  const output = new Output(query.get("output"));

  logger.debug("initial end date as %o", endDate);
  logger.debug("initial interval as %o (%o)", interval, interval.ms());
  logger.debug("initial output   as %o", output);

  return (
    <RootContainer>
      <TimingContainer end={endDate} interval={interval} output={output} />
    </RootContainer>
  );
};

export { IndexPage };
