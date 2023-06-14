import {
  lineCapValues,
  strokeStyleValues,
  tokenTypes,
  weightAliases,
} from "./constants.js";
import { Message } from "./messages.js";

/* Utility Types */

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type ParialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

/* Design Token Types */

export type Type = (typeof tokenTypes)[number];

export type Tokens = TokenGroup | TokenValue | AliasToken;

export type Token = {
  [key: string]: TokenValue | AliasToken;
};

export type TokenValueBeforeTypeResolution = Optional<TokenValue, "$type">;

export type TokenGroup = {
  $type?: string;
  [key: string]: string | TokenValue | TokenGroup | AliasToken | undefined;
};

export type WeightAlias = (typeof weightAliases)[number];

export type StrokeStyleValue = (typeof strokeStyleValues)[number];

type LineCapValue = (typeof lineCapValues)[number];

type StrokeStyleObjectValue = {
  dashArray: DimensionToken["$value"][];
  lineCap: LineCapValue;
};

type GradientStopValue = {
  color: ColorToken["$value"];
  position: number;
};

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

type StrokeStyleToken = {
  $value: StrokeStyleValue | StrokeStyleObjectValue;
  $type: "strokeStyle";
};

type BorderToken = {
  $value: {
    color: ColorToken["$value"];
    width: DimensionToken["$value"];
    style: StrokeStyleToken["$value"];
  };
  $type: "border";
};

type TransitionToken = {
  $value: {
    duration: DurationToken["$value"];
    delay: DurationToken["$value"];
    timingFunction: CubicBezierToken["$value"];
  };
  $type: "transition";
};

type ShadowToken = {
  $value: {
    color: ColorToken["$value"];
    offsetX: DimensionToken["$value"];
    offsetY: DimensionToken["$value"];
    blur: DimensionToken["$value"];
    spread: DimensionToken["$value"];
  };
  $type: "shadow";
};

type GradientToken = {
  $value: GradientStopValue[];
  $type: "gradient";
};

type TypographyToken = {
  $value: {
    fontFamily: FontFamilyToken["$value"];
    fontSize: DimensionToken["$value"];
    fontWeight: FontWeightToken["$value"];
    letterSpacing: DimensionToken["$value"];
    lineHeight: NumberToken["$value"];
  };
  $type: "typography";
};

export type AliasToken = {
  $value: string;
};

export type TokenValue =
  | ColorToken
  | DimensionToken
  | FontFamilyToken
  | FontWeightToken
  | DurationToken
  | CubicBezierToken
  | NumberToken
  | StrokeStyleToken
  | BorderToken
  | TransitionToken
  | ShadowToken
  | GradientToken
  | TypographyToken;

export type Results = Message[];
