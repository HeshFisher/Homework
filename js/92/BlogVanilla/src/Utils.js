export default function onClick(container, selector, callback) {
  container.addEventListener("click", (e) => {
    const targetElement = e.target.closest(selector);
    if (targetElement && container.contains(targetElement)) {
      callback(e, targetElement);
    }
  });
}
