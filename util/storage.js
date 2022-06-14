const TODOS_STORAGE_KEY = "TODOS";

export default {
  get: function () {
    return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
  },
  set: function (todos) {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  },
};
