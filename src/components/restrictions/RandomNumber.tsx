type RandomNumber = {
  value: number;
};

type PositiveNumber = RandomNumber & {
  isPositive: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

type NegativeNumber = RandomNumber & {
  isNegative: boolean;
  isPositive?: boolean;
  isZero?: boolean;
};

type Zero = RandomNumber & {
  isZero: boolean;
  isNegative?: boolean;
  isPositive?: boolean;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "Negative"}
      {""}
      {isZero && "Zero"}
    </div>
  );
};
