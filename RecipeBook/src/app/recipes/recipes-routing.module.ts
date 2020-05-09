import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeModule } from "./recipes.module";

const recipeRoutes: Routes = [
  {
    path: "",
    component: RecipesComponent,
    children: [{ path: ":id", component: RecipeDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
