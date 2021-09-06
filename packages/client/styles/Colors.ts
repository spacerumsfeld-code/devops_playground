import * as Polished from "polished";

type TValueOf<T> = T[keyof T];

const Black = "#000000";
const White = "#FFFFFF";
const Blurple = "#3F3FE1";
const Green = "#48BB78";
const Yellow = "#ECC94B";

const Colors = {
  Black,
  Black03: Polished.rgba(Black, 0.03),
  Black05: Polished.rgba(Black, 0.05),
  Black20: Polished.rgba(Black, 0.2),
  Black33: Polished.rgba(Black, 0.33),
  Black50: Polished.rgba(Black, 0.5),
  Black66: Polished.rgba(Black, 0.66),
  Black75: Polished.rgba(Black, 0.75),
  Black90: Polished.rgba(Black, 0.9),
  White,
  White05: Polished.rgba(White, 0.05),
  White10: Polished.rgba(White, 0.1),
  White50: Polished.rgba(White, 0.5),
  Blurple,
  Blurple5: Polished.rgba(Blurple, 0.05),
  Blurple10: Polished.rgba(Blurple, 0.1),
  Blurple20: Polished.rgba(Blurple, 0.2),
  DarkBlurple: "#161688",
  DarkestBlurple: "#0A0B39",
  Red: "#E53E3E",
  Green,
  Green15: Polished.rgba(Green, 0.15),
  DarkGreen: "#3A8267",
  Yellow,
  Yellow10: Polished.rgba(Yellow, 0.1),
  Grey1: "#333333",
  Grey2: "#4F4F4F",
  Grey3: "#828282",
  Grey4: "#BDBDBD",
  Grey5: "#E0E0E0",
  Grey6: "#F2F2F2",
  Grey7: "#F5F5F5",
  Grey8: "#F9F9F9",
};

export type ColorsType = TValueOf<typeof Colors>;

export default Colors;
