const addZero = (number) => (number <= 9 ? `0${number}` : number);
export const Time = (centiseconds) => {
  let minutes = 0;
  let seconds = 0;
if (centiseconds < 0) {
    centiseconds = 0;
  }
if (centiseconds < 100) {
    return `00:00:${addZero(centiseconds)}`;
  }
let remainCentiseconds = centiseconds % 100;
  seconds = (centiseconds - remainCentiseconds) / 100;
if (seconds < 60) {
    return `00:${addZero(seconds)}:${addZero(remainCentiseconds)}`;
  }
let remainSeconds = seconds % 60;
  minutes = (seconds - remainSeconds) / 60;
return `${addZero(minutes)}:${addZero(remainSeconds)}:${addZero(remainCentiseconds)}`;
};
