/* ~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~ */
export const Api = (() => {
    // const baseUrl = 'https://jsonplaceholder.typicode.com';
    const baseUrl = 'http://localhost:4232';
    const todoPath = 'todos';
  
    const getTodos = () => fetch([baseUrl, todoPath].join('/'))
      .then((response) => response.json());
  
    const addTodo = (newtodo) => fetch([baseUrl, todoPath].join('/'), {
      method: 'POST',
      body: JSON.stringify(newtodo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
  
    const deleteTodo = (id) => fetch([baseUrl, todoPath, id].join('/'), {
      method: 'DELETE',
    });
  
    return {
      getTodos,
      deleteTodo,
      addTodo
    }; // <---------- Api
  })();