import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieForm from "./components/MovieForm";
function App() {
  return (
    <div className="App">
      <MovieForm />
      <MovieCard />
    </div>
  );
}

export default App;
