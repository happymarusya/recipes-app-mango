import './App.css';
import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "b74a63af";
  const MY_KEY = "2165431daa57e009a1482b0eeb1947c7";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('mango');

  useEffect(() => {
    const getRecipes = async() => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data = await response.json();
    console.log(data.hits)
    setMyRecipes(data.hits);
    }
    getRecipes()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <div className='input-form'>
          <form onSubmit={finalSearch}>
            <input placeholder="Search..." onChange={myRecipeSearch} value={mySearch}/>
          <button className='input-btn'>
            <FaSearch className="searchIcon"/>
          </button>
          </form>
          </div>
          <div className='container-recipes'>
            {myRecipes.map((element, index) => (
              <MyRecipesComponent key={index}
              image={element.recipe.image}
              label={element.recipe.label}
              calories={element.recipe.calories}
              protein={element.recipe.digest[2].total}
              carbs={element.recipe.digest[1].total}
              fat={element.recipe.digest[0].total}
              link={element.recipe.url}/>
            ))}
          </div>
          <div className='footer'>
              <p className='footer-text'>All material used for educational purposes</p>
          </div>
        </div>
      </div>
      
  );
}

export default App;
