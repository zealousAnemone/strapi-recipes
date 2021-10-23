import Head from 'next/head';
import Header from '../components/Header';
import Recipe from '../components/Recipe';
import { useState } from 'react';

export default function Home({ recipes, categories }) {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <Head>
        <title>Strapi Recipe Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header categories={categories} filter={filter} setFilter={setFilter} />
      <div id="recipe-container">
        {recipes.map((recipe) => {
          if (!filter || (filter && filter === recipe.category.category)) {
            return <Recipe recipe={recipe} />;
          }
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const recipeRes = await fetch('http://localhost:1337/recipes');
  const categoryRes = await fetch('http://localhost:1337/categories');

  const recipes = await recipeRes.json();
  const categories = await categoryRes.json();

  return {
    props: {
      recipes,
      categories,
    },
  };
}
