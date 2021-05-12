import { Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store, STORE_FEATURES } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from '../store/shooping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('f',{static: true}) slForm: NgForm;
  subscription : Subscription;
  editMode= false;
  
  editedItem : Ingredient;


  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.subscription =this.store.select('shoppingList').subscribe(stateData=> {
      if(stateData.editedIngredientIndex > -1){
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount:this.editedItem.amount
        });
      }else{
        this.editMode= false;
      }
    });
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
  // onAddItem(){
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = parseInt(this.amountInputRef.nativeElement.value);
  //   const newIngredient = new Ingredient(ingName,ingAmount);
  //   this.shoppinglistService.ingredientAdded.next(newIngredient);
  
  // }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      // this.shoppinglistService.upadateIngredient(this.editedItemIndex,newIngredient);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngredient));
    }else{
      // this.shoppinglistService.ingredientAdded.next(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient))
    }
    this.editMode = false;
    this.slForm.reset();
    
   
  }

  onClear(){
      this.slForm.reset();
      this.editMode = false;
      this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete(){
    // this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient()); 
    this.onClear(); 
  }



  
}
