export function createHashRouter(main, views) {
    window.addEventListener("hashchange", onChange);

    return onChange;

    function onChange(event) {
      const name = window.location.hash;

      const view = views[name];
      if (typeof view === "function") {
        main.innerHTML = view();
      }
    }
} 