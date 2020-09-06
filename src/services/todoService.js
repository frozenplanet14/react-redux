export const getTodos = () => {
  return fetch('http://localhost:4400/todos').then((res) => res.json());
};

export const createTodo = (name) => {
  console.log(name);
  return fetch('http://localhost:4400/todos', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name, isComplete: false }),
  }).then((res) => res.json());
};