import "./category-item-styles.scss"

const CategoryItem=({category})=>{
    const {title,imageUrl:url}=category
  return (
    <div className="category-container">
           <div className="background-image" style={{
            backgroundImage:`url(${url})`
           }}> 
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
            </div>
          </div>
  )
}
export default CategoryItem