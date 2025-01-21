import { strategyArray } from "../data";

type StrategyCount = {
  strategy: string;
  count: number;
};

export const tabsContentByDate = strategyArray.map(({ View, Value }) => {
  const contentsRecords = Object.entries(Value).reduce<
    Record<string, StrategyCount[]>
  >((acc, [date, strategies]) => {
    acc[date] = strategies.reduce(
      (strategyAcc: StrategyCount[], strategy: StrategyCount["strategy"]) => {
        const existing = strategyAcc.find((item) => item.strategy === strategy);
        existing ? existing.count++ : strategyAcc.push({ strategy, count: 1 });
        return strategyAcc;
      },
      [] as StrategyCount[]
    );
    return acc;
  }, {} as Record<string, StrategyCount[]>);

  return { title: View, contentsRecords };
});
