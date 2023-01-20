function $(selector) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
  };
  return self;
}
