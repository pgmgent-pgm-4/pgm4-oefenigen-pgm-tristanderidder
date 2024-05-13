import './App.css';
import { useFetch } from './hooks/useFetch';
import { ThemeArea } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

const url = "https://fakestoreapi.com/products"
function App() {
  const { data : products, isLoading, isError } = useFetch(url);
  if(isLoading) return <>Loading...</>
  if(isError) return <>Error...</>
  return (
  <ThemeArea>
    <ThemeSwitcher />
    {products.map((product) => (
        <div key={product.key}>{product.title}</div>  
      ))}
  </ThemeArea>);
}

export default App;
