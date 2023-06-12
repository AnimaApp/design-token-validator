import { validateCubicBezier } from "./cubicBezier.js";
import { validateDuration } from "./duration.js";
import { TokenValidator } from "./type.js";

export const validateTransition: TokenValidator<"transition"> = (
  value,
  context
) => {
  const { delay, duration, timingFunction } = value;

  const isValidDelay = validateDuration(delay, context);

  if (!isValidDelay) {
    return false;
  }

  const isValidDuration = validateDuration(duration, context);

  if (!isValidDuration) {
    return false;
  }

  const isValidTimingFunction = validateCubicBezier(timingFunction, context);

  if (!isValidTimingFunction) {
    return false;
  }

  return true;
};
