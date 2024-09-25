const AlertLevel = {
  Unknown: -1,
  Low: 1,
  Medium: 2,
  High: 3,
} as const;

type AlertLevelType = (typeof AlertLevel)[keyof typeof AlertLevel];

type IndicationColor = 'red' | 'yellow' | 'blue' | 'grey';

const getIndicationColor = (level: AlertLevelType): IndicationColor => {
  switch (level) {
    case AlertLevel.Low:
      return 'blue';
    case AlertLevel.Medium:
      return 'yellow';
    case AlertLevel.High:
      return 'red';
    case AlertLevel.Unknown:
      return 'grey';
    default:
      const _exhaustiveCheck: never = level;
      throw new Error(_exhaustiveCheck);
  }
};
