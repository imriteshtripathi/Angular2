import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() OnrecipeSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'assets/pic.jpg'),
  new Recipe('A Test Recipe', 'Second content', 'assets/pic.jpg'),
]
  constructor() { }

  ngOnInit() {
  }
  OnRecipeSelectedFn(recipe: Recipe){
    this.OnrecipeSelected.emit(recipe);
    console.table(recipe);
  }
}
