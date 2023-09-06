function convertTemperature() {
  const temperatureInput = parseFloat(
    document.getElementById("temperature").value
  );
  const fromScale = document.getElementById("fromScale").value;
  const toScale = document.getElementById("toScale").value;
  let result;

  switch (fromScale) {
    case "celsius":
      switch (toScale) {
        case "fahrenheit":
          result = (temperatureInput * 9) / 5 + 32;
          break;
        case "kelvin":
          result = temperatureInput + 273.15;
          break;
        default:
          result = temperatureInput;
          break;
      }
      break;
    case "fahrenheit":
      switch (toScale) {
        case "celsius":
          result = ((temperatureInput - 32) * 5) / 9;
          break;
        case "kelvin":
          result = ((temperatureInput - 32) * 5) / 9 + 273.15;
          break;
        default:
          result = temperatureInput;
      }
      break;
    case "kelvin":
      switch (toScale) {
        case "celsius":
          result = temperatureInput - 273.15;
          break;
        case "fahrenheit":
          result = ((temperatureInput - 273) * 9) / 5 + 32;
          break;
        default:
          result = temperatureInput;
      }
      break;
    default:
      result = temperatureInput;
      break;
  }

  // if (fromScale === "celsius" && toScale === "fahrenheit") {
  //     result = (temperatureInput * 9/5) + 32;
  // } else if (fromScale === "celsius" && toScale === "kelvin") {
  //     result = temperatureInput + 273.15;
  // } else if (fromScale === "fahrenheit" && toScale === "celsius") {
  //     result = (temperatureInput - 32) * 5/9;
  // } else if (fromScale === "fahrenheit" && toScale === "kelvin") {
  //     result = ((temperatureInput - 32) * 5/9) + 273.15;
  // } else if (fromScale === "kelvin" && toScale === "celsius") {
  //     result = temperatureInput - 273.15;
  // } else if (fromScale === "kelvin" && toScale === "fahrenheit") {
  //     result = ((temperatureInput - 273.15) * 9/5) + 32;
  // } else {
  //     result = temperatureInput; // Same scale conversion
  // }

  document.getElementById("result").textContent = `${temperatureInput} ${
    fromScale.charAt(0).toUpperCase() + fromScale.slice(1)
  } is ${result.toFixed(2)} ${
    toScale.charAt(0).toUpperCase() + toScale.slice(1)
  }.`;
}
