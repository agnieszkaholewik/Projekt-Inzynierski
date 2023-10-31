import { View } from "react-native";
export default function Head({ position, size }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: "green",
        position: "absolute",
        left: position[0] * size,
        top: position[1] * size,
        borderRadius:3,
        borderColor:'black',
        borderWidth:1.5
      }}
    ></View>
  );
} 