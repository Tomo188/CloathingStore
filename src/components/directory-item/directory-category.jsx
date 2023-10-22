import "./directory-category-styles.scss"
import CategoryItem from "../category-item/category-item-component";
const DirectoryCategory=()=>{

    const directory = [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
      ];
    return (
        <div className="categories-container">
        {directory.map(({id,title,imageUrl}) => {
          return (
           <CategoryItem category={{title,imageUrl}} id={id} />
          );
        })}
      </div>
    )
}
export default DirectoryCategory