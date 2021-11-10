
const Recipe = ({recipe}) => {
  return (
    <div className='recipe-card'>
      <div className="recipe-name"><a href={`http://localhost:3000/recipe/${recipe.id}`}><h3>{recipe.name}</h3></a></div>
      <img src={`http://localhost:1337${recipe.photo.url}`} alt={recipe.name} className="recipe-image" />
      <span className='category'>{recipe.category.category}</span>
    </div>
  )
  }
  
  export default Recipe;