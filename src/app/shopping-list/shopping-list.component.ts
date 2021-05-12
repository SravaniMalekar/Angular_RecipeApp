import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shooping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Observable <{ingredients :Ingredient[]}>;
  private igChangeSub : Subscription;
 

  constructor(
    private loggingService: LoggingService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(){
    this.ingredients = this.store.select('shoppingList');

    // this.igChangeSub = this.shoppinglistService.ingredientAdded.subscribe(
    //   (Ingredient)=>{
    //     this.shoppinglistService.onIngredientAdded(Ingredient);
        
    //   }

    // )

    // this.ingredients = this.shoppinglistService.getIngredients();
    // this.shoppinglistService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
       
    //   })

    this.loggingService.printLog('Hello from shoppingListComponent');
    
  }

  ngOnDestroy(){
    // this.igChangeSub.unsubscribe();
  }

  onEditItem(index){
    // this.shoppinglistService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
