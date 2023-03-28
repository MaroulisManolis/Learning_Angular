import { Component } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Souvlaki', 'This is a Greek delicacy', 'https://www.poupadou.com/blog/wp-content/uploads/2020/04/Souvlaki-aux-brochettes-de-poulet-pain-pita-frites-tzatziki-et-tomates-1-1018x679.jpg')
  ];


}
