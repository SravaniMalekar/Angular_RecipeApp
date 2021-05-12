import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shooping-list.actions";


export interface State{
    ingredients: Ingredient[],
    editedIngredient: Ingredient;
    editedIngredientIndex : number;
}


const initialState: State = {
    ingredients: [
        new Ingredient('Onion',5),
        new Ingredient('Tomatoes', 10)],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state: State= initialState, action: ShoppingListActions.ShoppingListActions){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT :
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS :
            let ing = [...state.ingredients];
            action.payload.forEach(ingredient =>{
                const index = ing.findIndex(ing => ing.name === ingredient.name);
                if(index === -1){
                    ing =[...ing, ingredient];
                }else{
                   const amount = ing[index].amount + +ingredient.amount;
                    ing[index] = new Ingredient(ingredient.name, amount);
                }
            } )

            return {
                ...state,
                ingredients: ing
            };
        case ShoppingListActions.UPDATE_INGREDIENT :
            const ingredient =state.ingredients[state.editedIngredientIndex];
            const updatedIngredient ={
                ...ingredient,
                ...action.payload
            };
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients : updatedIngredients,
                editedIngredientIndex : -1,
                editedIngredient: null
            }
        case ShoppingListActions.DELETE_INGREDIENT :
            return{
                ...state,
                ingredients : state.ingredients.filter((ingredient, igIndex)=>{
                    return igIndex !== state.editedIngredientIndex; 
                }),
                editedIngredientIndex : -1,
                editedIngredient: null
            };
        case ShoppingListActions.START_EDIT :            
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient : {...state.ingredients[action.payload]}
            };
        case ShoppingListActions.STOP_EDIT:
            return{
                ...state,
                editedIngredient : null,
                editedIngredientIndex : -1
            };
        case ShoppingListActions.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: [...action.payload]
            }

        default:
            return state;
    }
}