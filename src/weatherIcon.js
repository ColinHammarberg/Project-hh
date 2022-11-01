import { Image } from "react-native";

const WeatherIcon = (props) => {
  const { source, style } = props;
  return <Image style={style} source={source} />;
};

export default WeatherIcon;
