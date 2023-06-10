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
    context.messages.push({
      message: `Token value must have a valid duration property`,
    });

    return false;
  }

  const isValidDuration = validateDuration(duration, context);

  if (!isValidDuration) {
    context.messages.push({
      message: `Token value must have a valid duration property`,
    });

    return false;
  }

  const isValidTimingFunction = validateCubicBezier(timingFunction, context);

  if (!isValidTimingFunction) {
    context.messages.push({
      message: `Token value must have a valid timingFunction property`,
    });

    return false;
  }

  return true;
};
