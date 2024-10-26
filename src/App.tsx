import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
// import { useAuthenticator } from '@aws-amplify/ui-react';

// import React from 'react';
// import SimpleForm from '../amplify/UI-component/SimpleForm';


const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  // const { signOut } = useAuthenticator();
    
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      
       <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul> 

      {/* <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul> */}

      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>


      {/* <button onClick={signOut}>Sign out</button> */}

    </main>
  );

}

export default App;

// function App() {
//   return (
//     <div>
//       <h1>My Simple Form</h1>
//       <SimpleForm />
//     </div>
//   );
// }

// export default App;
