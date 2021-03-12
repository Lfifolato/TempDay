export function Conditions(conditions) {
  switch (conditions) {
    case "storm":
      return (icon = {
        name: "rainy-outline",
        color: "#1ec9ff",
      });
      break;
    case "cloudly_day":
      return (icon = {
        name: "ios-partly-sunny-outline",
        color: "#ffb300",
      });
      break;
    case "cloud":
      return (icon = {
        name: "rainy-outline",
        color: "#1ec9ff",
      });
      break;

    default:
      return (icon = {
        name: "clud-outline",
        color: "#1ec9ff",
      });
      break;
  }
}
