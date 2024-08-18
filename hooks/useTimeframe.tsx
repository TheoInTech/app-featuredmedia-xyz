import { ETimeframe, TIMEFRAME_TOGGLE_KEY } from "@/types/timeframe.types";
import { useEffect, useState } from "react";

export function useTimeframe(
  defaultTimeframe: ETimeframe
): [ETimeframe, (timeframe: ETimeframe) => void] {
  const [timeframe, _setTimeframe] = useState<ETimeframe>(defaultTimeframe);

  const stringToTimeframe = (
    value: string,
    defaultValue: ETimeframe
  ): ETimeframe => {
    const enumValues = Object.values(ETimeframe) as string[];
    if (enumValues.includes(value)) {
      return value as ETimeframe;
    }
    return defaultValue;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(TIMEFRAME_TOGGLE_KEY);
      if (storedValue !== null) {
        const validTimeframe = stringToTimeframe(storedValue, defaultTimeframe);
        _setTimeframe(validTimeframe);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTimeframe = (newTimeframe: ETimeframe) => {
    _setTimeframe(newTimeframe);
    localStorage.setItem(TIMEFRAME_TOGGLE_KEY, newTimeframe);
  };

  return [timeframe, setTimeframe];
}
