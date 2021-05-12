import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListActions from '../store/shooping-list.actions';
import * as fromApp from '../../store/app.reducer';
import { Store } from "@ngrx/store";

@Injectable()
export class ShoppingListEffects{

    @Effect()
    fetchIngredients = this.actions$.pipe(
        ofType(ShoppingListActions.FETCH_INGREDIENTS),
        switchMap(()=>{
            return this.http
            .get<Ingredient[]>(
                'https://recipe-app-7cd8f-default-rtdb.firebaseio.com/shoppinglist.json');
         
        }),
        map(ingredients => {
            console.log(ingredients);
            return new ShoppingListActions.SetIngredients(ingredients);
        })
    )

    @Effect({dispatch: false})
    storeIngredients = this.actions$.pipe(
        ofType(ShoppingListActions.STORE_INGREDIENTS),
        withLatestFrom(this.store.select('shoppingList')),
        switchMap(([ActionData, ingredientsState])=>{
           
            return this.http.put('https://recipe-app-7cd8f-default-rtdb.firebaseio.com/shoppinglist.json',
            ingredientsState.ingredients);
            
        })
            
        )

    constructor(private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>){}

    }