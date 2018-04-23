export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ]
  addIngredient(){

  }

  getIngredient(){
    return this.ingredients;
  }
}
