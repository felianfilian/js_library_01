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
      if (value == null) {
        console.log(self.element.getAttribute(name));
      } else {
        self.element.setAttribute(name, value);
      }
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

// get attribute
$("h4").attr("class");

// set attribute
$("h5").attr("class", "myClass");
