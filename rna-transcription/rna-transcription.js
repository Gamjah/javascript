//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (array) => {
  function convert(x){
    if (x === "G"){
      return "C"
    }
    if (x === "C"){
      return "G"
    }
    if (x === "T"){
      return "A"
    }
    if (x === "A"){
      return "U"
    }
  }
  return array.split("").map((y) => convert(y)).join("");
};
