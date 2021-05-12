import{Ingredient} from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    

        private ingredients: Ingredient[] =[
        new Ingredient('Onion',5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients(){
        return this.ingredients.slice()
    }

    getIngredient(index: number){
      return this.ingredients[index];
    }

  onIngredientAdded(ingredient : Ingredient){

    const index = this.ingredients.findIndex(ing=> ing.name === ingredient.name);
    if(index === -1){
      this.ingredients.push(ingredient);
    }else{
      this.ingredients[index].amount += +ingredient.amount;
    }
       
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  ingredientAdded = new Subject<Ingredient>();

  addIngredients(ingredients: Ingredient[]){

    ingredients.forEach(ing=>this.onIngredientAdded(ing));
    // //spread-...-coverts an array to list
    // this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  upadateIngredient(index:number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  setIngredients(ingredients: Ingredient[]){
    this.ingredients = ingredients;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}