type COLOR = "red" | "yellow" | "green";
function handleColor(color: COLOR, setColor: (value: COLOR) => void) {
  switch (color) {
    case "red": {
      setTimeout(() => setColor("red"), 2000);
      break;
    }
    case "yellow": {
      setTimeout(() => setColor("yellow"), 4000);
      break;
    }
    case "green": {
      setTimeout(() => setColor("green"), 4000);
      break;
    }
  }
}
export { handleColor };
