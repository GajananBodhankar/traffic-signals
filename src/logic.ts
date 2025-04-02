type COLOR = "red" | "yellow" | "green";
interface iColor {
  RED: COLOR;
  YELLOW: COLOR;
  GREEN: COLOR;
}
export const staticColor: iColor = { RED: "red", YELLOW: "yellow", GREEN: "green" };
function handleColor(color: COLOR, setColor: (value: COLOR) => void) {
  const { RED, YELLOW, GREEN } = staticColor;
  switch (color) {
    case RED: {
      return setTimeout(() => setColor(RED), 2000);
    }
    case YELLOW: {
      return setTimeout(() => setColor(YELLOW), 4000);
    }
    case GREEN: {
      return setTimeout(() => setColor(GREEN), 4000);
    }
    default: {
      return 0;
    }
  }
}
export { handleColor };
