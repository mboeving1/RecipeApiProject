import axios from "axios";
import RecipeSearchResponseInterface from "../models/RecipeSearchResponseInterface";
import "animate.css"
export default function getRecipeResponse(searchQuery:string): Promise<RecipeSearchResponseInterface> {
  return axios
    .get(
      "https://api.edamam.com/api/recipes/v2", {
          params: {
              type: "public",
              q: searchQuery,
              app_id: process.env.REACT_APP_APP_ID,
              app_key: process.env.REACT_APP_APP_KEY
          }
      }

    )

    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
