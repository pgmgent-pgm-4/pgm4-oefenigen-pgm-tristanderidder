import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from './graphql/queries';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div>
      {data.todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.name}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
