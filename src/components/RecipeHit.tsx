import { HitsEntity } from "../models/RecipeSearchResponseInterface";
import "animate.css"
import { SlideDown } from "react-slidedown";
import 'react-slidedown/lib/slidedown.css';

export default function RecipeHit({recipe, _links}: HitsEntity) {
    return (
    // <SlideDown>
        <div className="RecipeBlock animation">
        <h1>{recipe.label}</h1>
        <img src={recipe.image}/>
        <p>source: <a href={recipe.url}>{recipe.source}</a></p>
        <a href="" onClick={(event) =>{
            event?.preventDefault()
        console.log("it clicked")
        }}><i className="fas fa-heart"></i>Add To Favorites</a>
    </div>
    // </SlideDown>
    )
}