function get_number_keys(o) {
  const keys = Object.keys(o);

  const obj_keys = keys.filter(k => typeof(o[k]) === "object");
  const num_keys = keys.filter(k => typeof(o[k]) === "number");

  return obj_keys.reduce(
    (acc, newbie) => acc.concat(get_number_keys(o[newbie])),
      num_keys);
}

console.log('It works!');
console.log(get_number_keys(widget));
