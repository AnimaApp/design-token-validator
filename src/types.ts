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

export type TokenValue = {
  $value: string;
  $type: Type;
};

export type TokenGroup = {
  [key: string]: TokenValue | TokenGroup;
};

interface Result {
  message: string;
}

export type Results = Result[];
