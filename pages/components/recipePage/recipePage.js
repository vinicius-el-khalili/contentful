import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import style from "@/styles/recipePage.module.css"
import Image from "next/image";

const RecipePage = ({thumbnail,title,ingredients,method}) => {
    return (
        <div className={style.recipePageContainer}>
            
            <div className={style.thumbnail}>
                <Image 
                src={thumbnail}
                fill
                style={{objectFit:"cover"}}
                />
            </div>

            <div className={style.title}>{title}</div>
            
            <div className={style.ingredients}>
                <h2>Ingredients</h2>    
                {ingredients.map(ingredient=>{return(
                    <p>{ingredient}</p>
                )})}
            </div>

            <div className={style.method}>
                <h2>Instructions</h2>
                {documentToReactComponents(method)}
            </div>
            
        </div>
    );
}
 
export default RecipePage;