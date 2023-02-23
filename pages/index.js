import styles from '@/styles/Home.module.css'
import { createClient } from 'contentful'

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
  console.log(recipes)
  console.log(recipes.items)
  return (

    <>

      {recipes.items.map(recipe=>{return (
        <div key={recipe.sys.environment.id}>
          
          <h1>{recipe.fields.title}</h1>
          <h3>Ingredients</h3>
            {recipe.fields.ingredients.map(ing=>{
              return(<p>{ing}</p>)
            })}
          <h3>Method</h3>

        </div>
        
      )})}

    </>
    
  )
}
