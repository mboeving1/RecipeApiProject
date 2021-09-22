import { useState } from "react"
import "animate.css"

export default function RecipeSearchForm ({onSubmit}:{onSubmit: (searchQuery:string) => void;
}) {
    const [recipeQuery, setRecipeQuery] = useState("");
    const resetInputField = () => {
        setRecipeQuery("");
      };
    return (
        <div className="RecipeSearchForm">
            <form onSubmit={(event) => {
                event?.preventDefault();
                onSubmit(recipeQuery)
                resetInputField();//clears the input field after submit
                document.querySelectorAll(".animation").forEach((recipeBlock)=>{
                    recipeBlock.classList.remove("animation")
                    setTimeout(() =>{
                        recipeBlock.classList.add("animation")
                        
                    }, 500 )
                })
                }}>
                <input type="text" value={recipeQuery} onChange={(event) => {setRecipeQuery(
                    event.target.value)}
                    }></input>
            </form>
                    
        </div>
    )
}