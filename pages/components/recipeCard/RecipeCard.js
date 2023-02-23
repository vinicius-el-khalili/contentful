import style from "@/styles/RecipeCard.module.css"
import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({id,title,cookingTime,slug,thumbnail}) => {
    return (
        <div key={id} className={style.recipeCardContainer}>
            
            <div style={{display:"flex",justifyContent:"space-between"}}>
                    
                <div className={style.cardHeading}> 
                    <h2> {title} </h2>
                    <p> Cooking time: {cookingTime} minutes </p>
                </div>
                
                <Link href={'/recipes/'+slug} className={style.link} >
                    VIEW RECIPE
                </Link>

            </div>

            <div className={style.thumbnail}>
                <Image
                    src={'https:'+thumbnail.fields.file.url}
                    fill
                    style={{objectFit:"cover"}}/>       
            </div>


        </div>
    );
}

export default RecipeCard;
