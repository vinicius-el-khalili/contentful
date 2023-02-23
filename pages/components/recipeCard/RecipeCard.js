import style from "@/styles/RecipeCard.module.css"
import Link from "next/link";

const RecipeCard = ({id,title,cookingTime,slug}) => {
    return (
        <div key={id}>
            <h2>{title}</h2>
            <p>Cooking time: {cookingTime} minutes</p>
            <Link href={'/recipes/'+slug} className={style.link} >
                Cook
            </Link>
        </div>
    );
}
 
export default RecipeCard;