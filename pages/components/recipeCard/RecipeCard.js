import style from "@/styles/RecipeCard.module.css"
import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({id,title,cookingTime,slug,thumbnail}) => {
    return (
        <div key={id} className={style.recipeCardContainer}>
            
            <div className={style.cardHeading}>
                <Link href={'/recipes/'+slug} className={style.link}>
                    <h2>{title}</h2>
                    </Link>
            </div>

            <div className={style.thumbnail}>
                <Link href={'/recipes/'+slug} className={style.link}>
                    <Image
                        src={'https:'+thumbnail.fields.file.url}
                        fill
                        style={{objectFit:"cover"}}/>       
                    </Link>
            </div>

            <p> Cooking time: {cookingTime} minutes </p>

        </div>
    );
}

export default RecipeCard;
