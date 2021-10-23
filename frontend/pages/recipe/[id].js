import marked from 'marked';
import Link from 'next/link';

const fullRecipe = ({ recipe }) => {
  const getMarkdownText = (text) => {
    const formattedText = marked(text);
    return { __html: formattedText };
  };
  return (
    <div className="full-recipe">
      <h1>{recipe.name}</h1>
      <img
        src={`http://localhost:1337${recipe.photo.url}`}
        alt={recipe.name}
        width={400}
      />
      <h3>Ingredients</h3>
      <div dangerouslySetInnerHTML={getMarkdownText(recipe.ingredients)}></div>
      <h3>Instructions</h3>
      <div dangerouslySetInnerHTML={getMarkdownText(recipe.instructions)}></div>
      <Link href="/">
        <button className="home">Home</button>
      </Link>
    </div>
  );
};

export default fullRecipe;

export async function getStaticPaths() {
  const response = await fetch('http://localhost:1337/recipes');
  const recipes = await response.json();
  return {
    paths: recipes.map((recipe) => ({
      params: {
        id: recipe.id.toString(),
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:1337/recipes?id=${params.id}`);
  const recipes = await response.json();
  return {
    props: { recipe: recipes[0] },
    revalidate: 1,
  };
}
