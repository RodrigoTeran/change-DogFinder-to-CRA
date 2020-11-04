const possibleValuesForHack = [
  "/",
  "<",
  ">",
  "'",
  '"',
  "`",
  "|",
  "°",
  "¬",
  "?",
  "¿",
  "\\",
  "@",
  "#",
  "&",
  "+",
  "%",
  "(",
  ")",
  "¡",
  "!",
  "-",
  "*",
  "}",
  "{",
  "^",
  ".",
  ",",
  ";",
  "_",
  "[",
  "]",
  "~",
  "¨",
  "=",
  "´"
]

export const checkFuckingHack = (elementString, elementsAvailable) => {
  let status = false;
  var newArrayHacking = possibleValuesForHack;

  const indexes = [];

  newArrayHacking.forEach(elementArrayHack => {
    elementsAvailable.forEach(elementArrayAvailable => {
      if (elementArrayHack === elementArrayAvailable) {
        const index = newArrayHacking.indexOf(elementArrayAvailable);
        indexes.push(index)
      };
    });
  });

  for (var k = 0; k < indexes.length; k++) {
    newArrayHacking.splice(indexes[k] - k, 1);
  };

  for (var i = 0; i < newArrayHacking.length; i++) {
    for (var j = 0; j < elementString.length; j++) {
      if (elementString[j] === newArrayHacking[i]) {
        status = true;
      };
    };
  };
  return status;
};
