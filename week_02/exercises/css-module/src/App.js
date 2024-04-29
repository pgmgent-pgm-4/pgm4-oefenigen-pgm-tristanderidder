import './App.css';
import TeamMember from './components/TeamMember';

function App() {
  return (
    <div className="App">
      <TeamMember image={'image'} firstName={'Erin'} lastName={'Lindford'} role={'Customer Support'} mail={'erinlindford@example.com'} number={'(555) 765-4321'} />
    </div>
  );
}

export default App;
