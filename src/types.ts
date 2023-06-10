import { weightAliases } from "./constants.js";

export type Type =
  | "color"
  | "dimension"
  | "fontFamily"
  | "fontWeight"
  | "duration"
  | "cubicBezier"
  | "number"
  | "strokeStyle"
  | "border"
  | "transition"
  | "shadow"
  | "gradient"
  | "typography";

export type Tokens = TokenGroup | TokenValue;

export type Token = {
  [key: string]: TokenValue;
};

export type WeightAlias = (typeof weightAliases)[number];

type ColorToken = {
  $value: string;
  $type: "color";
};

type DimensionToken = {
  $value: string;
  $type: "dimension";
};

type FontFamilyToken = {
  $value: string | string[];
  $type: "fontFamily";
};

type FontWeightToken = {
  $value: number | WeightAlias;
  $type: "fontWeight";
};

type DurationToken = {
  $value: `${number}ms`;
  $type: "duration";
};

type CubicBezierToken = {
  $value: [number, number, number, number];
  $type: "cubicBezier";
};

type NumberToken = {
  $value: number;
  $type: "number";
};

type BasicToken = {
  $value: string;
  $type: Type | undefined;
};

export type TokenValue =
  | ColorToken
  | DimensionToken
  | FontFamilyToken
  | FontWeightToken
  | DurationToken
  | CubicBezierToken
  | NumberToken
  | BasicToken;

export type TokenGroup = {
  [key: string]: TokenValue | TokenGroup;
};

interface Result {
  message: string;
}

export type Results = Result[];
