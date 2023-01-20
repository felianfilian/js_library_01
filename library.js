function $(selector) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
    on: (event, callback) => {
      document.addEventListener(event, callback);
    },
  };
  return self;
}

console.log($("h1").html());

// create event
$("h2").on("click", () => {
  alert("MARIO");
});
