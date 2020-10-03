import dogPosibleAges from "./ageDogs";

const dogPosibleAgesInt = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16
];

const dogPosibleAgesIntFunction = (stringDogAge) => {
  for (var i = 0; i < dogPosibleAges.length; i++) {
    if (dogPosibleAges[i] === stringDogAge) {
      return dogPosibleAgesInt[i];
    };
  };
  return "Buscar";
};
export default dogPosibleAgesIntFunction;