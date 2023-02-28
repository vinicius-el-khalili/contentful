import { createClient } from 'contentful'
import RecipePage from '../components/recipePage/recipePage';

const Recipe = ({recipe}) => {
        return (
        <RecipePage
        thumbnail={"https:"+recipe.fields.thumbnail.fields.file.url}
        title={recipe.fields.title}
        ingredients={recipe.fields.ingredients}
        method={recipe.fields.method}
        />
    );
}

// 
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export async function getStaticPaths(){
    const response = await client.getEntries({
        content_type:"recipe"
    })
    const paths = response.items.map(item=>{
        return {
            params:{recipe:item.fields.slug}
        }
    })
    return {
        paths,
        fallback:false
    }

}

export async function getStaticProps(context){
    const response = await client.getEntries({
        content_type:"recipe"
    })
    let recipe = response.items.filter(entry=>{
        return entry.fields.slug===context.params.recipe
    })
    return{
        props:{
            recipe: recipe[0]
        }
    }
}

export default Recipe;