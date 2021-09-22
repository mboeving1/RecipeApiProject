import RecipeSearchForm from "./RecipeSearchForm";
import getRecipeResponse from "../services/getRecipeResponse"
import RecipeSearchResponseInterface from "../models/RecipeSearchResponseInterface";
import { useState } from "react";
import RecipeHit from "./RecipeHit";
import "animate.css"
import SlideDown from "react-slidedown";
export default function RecipeList(){
    const [recipeSearchResponse, setRecipeSearchResponse]= useState<RecipeSearchResponseInterface>();
    
    function onSubmit(searchQuery:string):void{
        getRecipeResponse(searchQuery).then((data)=>
        setRecipeSearchResponse(data));
    }
    return (
    <div>
        <h1>Recipe List</h1>
        {/* <button onClick={() => {getRecipeResponse()}}>Get Response</button> */}
        
        <RecipeSearchForm onSubmit={onSubmit}/>
        {recipeSearchResponse?.hits?.map((hit, index) => <RecipeHit recipe={hit.recipe} _links={hit._links} key={index}/>)}
    </div>

    );
}