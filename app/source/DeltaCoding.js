class DeltaCoding {
  static delta_encode(buffer) {
    let str = buffer.split("");
    let last = 0;
    for (let i = 0; i < str.length; i++) {
      let current = str[i];
      str[i] = current - last;
      last = current;
    }

    return str.join("");
  }

  static delta_decode(buffer)
  {
    let str = buffer.split("");
    let  last = 0;
      for (let i = 0; i < str.length; i++)
      {
          let delta = str[i];
          str[i] = delta + last;
          last = str[i];
      }

      return str.join("");
  }
}

console.log(DeltaCoding.delta_encode("12345"));
console.log(DeltaCoding.delta_decode("11111"));
