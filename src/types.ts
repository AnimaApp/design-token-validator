type Type =
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

export interface Token {
  [key: string]: {
    $value: string;
    $type: Type;
  };
}

interface Result {
  message: string;
}

export type Results = Result[];
