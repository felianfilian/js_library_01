function $(selector) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
    on: (event, callback) => {
      document.addEventListener(event, callback);
    },
    hide: () => {
      self.element.style.display = "none";
    },
    attr: (name, value) => {
      self.element.setAttribute(name, value);
    },
  };
  return self;
}

console.log($("h1").html());

// create event
$("h2").on("click", () => {
  alert("MARIO");
});

// hide function
$("h3").hide();

// set a attribute
$("h4").attr("class", "myClass");
