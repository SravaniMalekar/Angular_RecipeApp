import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../recipe.model";
import * as RecipesActions from './recipe.actions';

export interface State{
    recipes: Recipe[];
}

const initialState: State = {
    recipes : []
};

export function recipeReducer(state= initialState, action: RecipesActions.RecipesActions){
    switch(action.type){
        case RecipesActions.SET_RECIPES:
            console.log(...action.payload);
            return{
                ...state,
                recipes: [...action.payload] 
            }
        case RecipesActions.ADD_RECIPE:
            return{
                ...state,
                recipes:[...state.recipes, action.payload]
            }
        case RecipesActions.UPDATE_RECIPE:
            const updatedRecipe = {
                ...state.recipes[action.payload.index],
                ...action.payload.newRecipe
            };
            const updatedRecipes = [...state.recipes];
            updatedRecipes[action.payload.index] = updatedRecipe;
            console.log(updatedRecipes);
            return{
               ...state,
               recipes: updatedRecipes
            }
        case RecipesActions.DELETE_RECIPE:
            return{
                ...state,
                recipes: state.recipes.filter((recipe,index)=> {
                    return index !== action.payload;
                })
            }
        default:
            return state;    
    }
}