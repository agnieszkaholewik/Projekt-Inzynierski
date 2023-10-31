import { View } from "react-native";
export default function Tail({ elements, position, size }) {
  const tailList = elements.map((el, idx) => (
    <View
      key={idx}
      style={{
        width: size,
        height: size,
        position: "absolute",
        left: el[0] * size,
        top: el[1] * size,
        backgroundColor: "green",
        borderRadius:3,
        borderColor:'black',
        borderWidth:1.5
      }}
    />
  ));
  return (
    <View
      style={{
        width: 15 * size,
        height: 15 * size,
      }}
    >
      {tailList}
    </View>
  );
}