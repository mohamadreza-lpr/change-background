const colors = ["crimson", "deeppink", "deepskyblue", "gold", "lightgrey", "pink", "orange", "mediumturquoise", "lemonchiffon", "indigo"];

colors.forEach((color) => {
     const button = document.createElement("button");
     button.style.backgroundColor = color;
     document.querySelector(".colors").appendChild(button);
     button.onclick = function () {
          document.body.style.backgroundColor = color;
          const colorName = document.querySelector("#current-color");
          colorName.innerHTML = color;
          const currentClass = document.querySelector("button.active");
          if (currentClass !== null) {
               currentClass.classList.remove("active");
          }
          button.classList.add("active");
     };
});
document.body.onload = function () {
     const randomNumber = Math.floor(Math.random() * colors.length);
     document.body.style.backgroundColor = colors[randomNumber];
     const colorName = document.querySelector("#current-color");
     colorName.innerHTML = colors[randomNumber];
};
