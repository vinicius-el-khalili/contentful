import styles from '@/styles/Home.module.css'
import { createClient } from 'contentful'
import RecipeCard from './components/recipeCard/RecipeCard'

export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const response = await client.getEntries({
    content_type: "recipe"
  })

  return {
    props:{
      recipes: response
    }
  }
}

export default function Home({recipes}) {
  return (
    <>
      <h1>RECIPES</h1>
      {recipes.items.map(recipe=>{return (
        <RecipeCard 
          id={recipe.sys.environment.id}
          title={recipe.fields.title}
          cookingTime={recipe.fields.cookingTime}
          slug={recipe.fields.slug}
        />
      )})}

    </>
  )
}
