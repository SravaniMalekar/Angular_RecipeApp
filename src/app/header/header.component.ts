import { Component, OnDestroy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AuthService } from '../auth/auth-service';
// import { AuthEffects } from '../auth/store/auth.effects';
// import { DataStorageService } from '../shared/data-storage-service';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipesActions from '../recipes/store/recipe.actions';
import * as ShoppingListActions from '../shopping-list/store/shooping-list.actions';

@Component({
    selector: 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated =false;
    private userSub: Subscription;

    constructor(
        // private dataStorageService: DataStorageService,
        // private authService: AuthService,
        private store: Store<fromApp.AppState>
        ){}

    ngOnInit(){
        this.userSub = 
        this.store.select('auth')
        .pipe(map(authState =>
            authState.user))
        .subscribe(user =>{
            this.isAuthenticated= !!user;
        });
    }

    onSaveData(){
        this.store.dispatch(new RecipesActions.StoreRecipes());
        this.store.dispatch(new ShoppingListActions.StoreIngredients());
        // this.dataStorageService.storeRecipes();
        // this.dataStorageService.storeIngredients();
    }

    onFetchData(){
        this.store.dispatch(new RecipesActions.FetchRecipes());
        this.store.dispatch(new ShoppingListActions.FetchIngredients());

        // this.dataStorageService.fetchRecipes().subscribe(responseData=>{
        //     console.log(responseData);
        // });
        // this.dataStorageService.fetchIngredients().subscribe(responseData=>{
        //     console.log(responseData);
        // })
    }

    onLogout(){
        this.store.dispatch(new AuthActions.Logout())
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }

    
}