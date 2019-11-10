import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  recipeService: RecipeService;

  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
  }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
