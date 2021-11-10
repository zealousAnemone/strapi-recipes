export default function Header({setFilter, categories}) {

  return (
    <div className="header">
      <h3>Strapi Recipe Book</h3>
      <ul>
        <li className="category" onClick={() => {setFilter(null)}}>All recipes</li>
      {categories.map((category) => (
        <li className="category" key={category.category} onClick={() => {setFilter(category.category)}}>{category.category}</li>
      ))}
      </ul>
    </div>
  )
}