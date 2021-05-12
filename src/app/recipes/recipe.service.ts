
// import {Injectable} from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Subject } from 'rxjs';
// import { Ingredient } from '../shared/ingredient.model';
// import * as ShoppingListActions  from '../shopping-list/store/shooping-list.actions';
// import {Recipe} from './recipe.model';
// import * as fromApp from '../store/app.reducer';

// @Injectable()
// export class RecipeService {
//     recipesChanged = new Subject<Recipe[]>();

//     constructor(
//         private store: Store<fromApp.AppState>){

//     }
//     private recipes: Recipe[] =[];

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Mexican Tacos',
    //         'Easy ,quick, authentic mexican tacos!',
    //         'https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg',
    //         [
    //             new Ingredient('Steak',1),
    //             new Ingredient('Onion',2),
    //             new Ingredient('Tortiallas',4),
    //             new Ingredient('Tomatoes',3),
    //             new Ingredient('Garlic',3),
    //             new Ingredient('Lime',1)
    //         ]
    //         ),
    //     new Recipe('Classic Lasangna',
    //     'Layer the sauce with noodles and cheese, then bake until bubbly! ',
    //     'https://hips.hearstapps.com/vidthumb/images/180820-bookazine-delish-01280-1536610916.jpg?crop=1.00xw:0.752xh;0,0.250xh&resize=640:*',
    //     [
    //        new Ingredient('Meat',1),
    //        new Ingredient('Onion',2),
    //        new Ingredient('Bell Pepper',1),
    //        new Ingredient('Crushed Tomatoes',3),
    //        new Ingredient('Garlic',2),
    //        new Ingredient('Lagansa Noodles',9)
    //     ])
    
    //   ];

//     setRecipes(recipes: Recipe[]){
//         this.recipes = recipes;
//         this.recipesChanged.next(this.recipes.slice());
//     }

//     getRecipes(){
//         //Returns a new array which is a copy of recipes array
//         return this.recipes.slice();
//     }

//     addIngredientsToSL(ingredients:Ingredient[]){
//         // this.shoppinglistService.addIngredients(ingredients);
//         this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))

//     }

//     getRecipe(id : number){
//         return this.recipes.slice()[id];
//     }

//     addRecipes(recipe: Recipe){
//         this.recipes.push(recipe);
//         this.recipesChanged.next(this.recipes.slice());
//     }

//     updateRecipe(index:  number, newRecipe: Recipe){
//         this.recipes[index] = newRecipe;
//         this.recipesChanged.next(this.recipes.slice());
//     }

//     deleteRecipe(index: number){
//         this.recipes.splice(index,1);
//         this.recipesChanged.next(this.recipes.slice());
//     }
// }