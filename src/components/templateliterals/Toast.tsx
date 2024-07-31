type HorizontalDirection = "left" | "center" | "right";

type VerticalDirection = "top" | "center" | "right";

type ToastProps = {
  position: Exclude<
    `${HorizontalDirection}-${VerticalDirection}`,
    "center-center"
  >;
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Position - {position}</div>;
};
