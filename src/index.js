import './styles.css';

/* import { Todo } from './classes/todo.class.js';
import { TodoList } from './classes/todo-list.class';
 */
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

console.log( todoList.todos);

todoList.todos.forEach( todo => crearTodoHtml( todo ));
    


// const tarea    = new Todo( 'Aprender JS');
// todoList.nuevoTodo( tarea );


// console.log( todoList );

// crearTodoHtml( tarea );



// localStorage.setItem( 'miKey', 'ABC123');

