

const randomPositions = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
  export default function (entities, { events, dispatch }) {
    const head = entities.head;
    const apples = entities.apples;
    const tail = entities.tail;
  if (events.length) {
    events.forEach((e) => {
      switch (e) {
        case "move-up":
          if (head.yspeed === 1) return;
          head.yspeed = -1;
          head.xspeed = 0;
          return;
        case "move-right":
          if (head.xspeed === -1) return;
          head.xspeed = 1;
          head.yspeed = 0;
          // ToastAndroid.show("move right", ToastAndroid.SHORT);
          return;
        case "move-down":
          if (head.yspeed === -1) return;
          // ToastAndroid.show("move down", ToastAndroid.SHORT);
          head.yspeed = 1;
          head.xspeed = 0;
          return;
        case "move-left":
          if (head.xspeed === 1) return;
          head.xspeed = -1;
          head.yspeed = 0;
          // ToastAndroid.show("move left", ToastAndroid.SHORT);
          return;
      }
    });
  }
  head.nextMove -= 1;
  if (head.nextMove === 0) {
    head.nextMove = head.updateFrequency;
    if (
      head.position[0] + head.xspeed < 0 ||
      head.position[0] + head.xspeed >= 15 ||
      head.position[1] + head.yspeed < 0 ||
      head.position[1] + head.yspeed >= 15
    ) {
      dispatch("game-over");
    } else {
      tail.elements = [[head.position[0], head.position[1]], ...tail.elements];
      tail.elements.pop();
      head.position[0] += head.xspeed;
      head.position[1] += head.yspeed;
      tail.elements.forEach((el, idx) => {
        
        if (
          head.position[0] === el[0] &&
          head.position[1] === el[1] 
        )
          dispatch("game-over");
      });
      if (
        head.position[0] == apples.position[0] &&
        head.position[1] == apples.position[1]
      ) {
        tail.elements = [
          [head.position[0], head.position[1]],
          ...tail.elements,
        ];

        apples.position = [
          randomPositions(0, 15 - 1),
          randomPositions(0, 15 - 1),
        ];
      }
    }
  }
  return entities;
}