export default function Header({setFilter, categories}) {

  return (
    <div className="header">
      <h3>Strapi Recipe Book</h3>
      <ul>
        <li className="type" onClick={() => {setFilter(null)}}>All recipes</li>
      {categories.map((category) => (
        <li className="type" onClick={() => {setFilter(category.category)}}>{category.category}</li>
      ))}
      </ul>
    </div>
  )
}