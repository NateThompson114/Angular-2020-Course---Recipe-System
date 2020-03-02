import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A test recipe to test data', 'https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/20-3-large.jpg?itok=1EY8KWJG')
  ];
  constructor() { }

  ngOnInit() {
  }

}
