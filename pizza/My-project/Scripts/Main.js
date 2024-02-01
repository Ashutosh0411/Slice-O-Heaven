let cont = document.getElementsByClassName("container");

let basket = JSON.parse(localStorage.getItem("data")) || [];
let add = (id) => {
  let search = basket.find((x) => x.id === id);
  let size = document.getElementsByName(id)
  let a="adrink";
    for (i = 0; i < size.length; i++) {
      if (size[i].checked)
        a = size[i].id;
    }
    a = a.slice(1);
  let z = 0;
  if (a == "small") {
    z = 1;
  }
  else if (a == "medium") {
    z = 2;
  }
  else if (a == "large") {
    z = 3;
  }
  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
      size: z,
    });
    console.log(basket);

  }
  localStorage.setItem("data", JSON.stringify(basket));
  var btn = document.getElementById(id + "btn");
  btn.innerHTML = "Added to cart";
  btn.style = "background-color:#39FF14";
};
