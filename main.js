function generat() {
  let letters = "abcdef0123456789";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.trunc(Math.random() * letters.length)];
  }
  return color;
}

document.getElementById("btn").onclick = function () {
  document.body.style.backgroundColor = generat();
  document.querySelector("span").textContent = generat();
};
