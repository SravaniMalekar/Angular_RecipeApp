// import { Injectable } from "@angular/core";
// import { HttpClient, HttpParams} from "@angular/common/http";
// import { RecipeService } from "../recipes/recipe.service";
// import {Recipe} from '../recipes/recipe.model'
// import { exhaustMap, map, take, tap } from "rxjs/operators";
// // import { AuthService } from "../auth/auth-service";
// // import { ShoppingListService } from "../shopping-list/shopping-list.service";
// // import { Ingredient } from "./ingredient.model";
// import { Store } from "@ngrx/store";
// // import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
// import * as fromApp from '../store/app.reducer';
// import * as RecipesActions from '../recipes/store/recipe.actions';


// @Injectable({providedIn : 'root'})
// export class DataStorageService {
//     constructor(private http: HttpClient,
//         private recipeService: RecipeService,
//         // private authService: AuthService,
//         // private shoppingListService: ShoppingListService
//         private store: Store<fromApp.AppState>
//         ){}

//     storeRecipes(){
//         const recipes = this.recipeService.getRecipes();
//         //overwrites all the data
//         this.http
//         .put(
//             'https://recipe-app-7cd8f-default-rtdb.firebaseio.com/recipes.json', 
//             recipes
//             )
//         .subscribe(responseData =>{
//             console.log(responseData);
//         })
//     }

//     fetchRecipes(){
//         //only taje one value from the subject
//         return this.http
//         .get<Recipe[]>(
//             'https://recipe-app-7cd8f-default-rtdb.firebaseio.com/recipes.json'
//             ).pipe(
//                 map(recipes=> {
//                     return recipes.map(recipe =>{
//                         return{...recipe,
//                             ingredients: recipe.ingredient ? recipe.ingredient: []
//                         };
//                     })
//                 }),
//                 tap(recipes=>{
//                     // this.recipeService.setRecipes(recipes);
//                     this.store.dispatch(new RecipesActions.SetRecipes(recipes));
//                 })
//             );    
        
//     }

    // storeIngredients(){
    //     const ingredients = this.shoppingListService.getIngredients();
    //     this.http.put('https://recipe-app-7cd8f-default-rtdb.firebaseio.com/shoppinglist.json',
    //     this.store.select('shoppingList'))
    //     .subscribe(responseData=> {
    //         console.log(responseData);
    //     })
    // }


    // fetchIngredients(){
    //     return this.http
    //     .get<Ingredient[]>('https://recipe-app-7cd8f-default-rtdb.firebaseio.com/shoppinglist.json')
    //     .pipe(tap(ingredients =>{
    //         this.shoppingListService.setIngredients(ingredients);
    //     }))
        
    // }

    

    
// }
