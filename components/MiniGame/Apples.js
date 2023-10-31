
import { View } from "react-native";

export default function Apples({ position, size }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: "red",
        position: "absolute",
        left: position[0] * size,
        top: position[1] * size,
        borderRadius: 50,
        borderColor:'black',
        borderWidth:1.5
      }}
    ></View>
  );
}