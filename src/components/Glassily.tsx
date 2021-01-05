/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";

export const GlassilyContainer = styled.div([
  tw`flex flex-col justify-center items-center`,
  tw`h-auto w-full`,
  tw`relative z-10`,
  tw`m-4 px-10 py-6 md:px-12 md:py-8 lg:px-16 md:py-12`,
  tw`shadow-lg rounded-lg overflow-hidden`,
  `background: inherit;`,
  `&:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(50px);
    margin: -20px;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .85);
  };`,
]);

export const GlassilyText = tw.span`
p-3 text-3xl lg:text-4xl
cursor-text no-underline select-none
font-mono leading-tight text-white
`;
