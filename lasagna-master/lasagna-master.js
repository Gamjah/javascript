/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer){
    if (timer === 0){
        return 'Lasagna is done.'
    } else if (timer > 0){
        return "Not done, please wait." 
    } else if (timer === null || timer === undefined){
        return "You forgot to set the timer."
    }
}

export function preparationTime (layers,time){
    if (time == null || time == undefined) {
        return layers.length*2;
    }
    if (layers.length > 0 && time > 0) {
        return layers.length*time
    }

    if (layers.length == 0 && time == 0) {
        return "Layers and time cannot be 0"
    }

}

export function quantities (ingredients){
    let noodlesCounter = 0;
    let sauceCounter = 0;
    for (let i = 0;i < ingredients.length ; i++){
        if (ingredients[i]==="noodles"){
            noodlesCounter += 50;
        }
        else if (ingredients[i]==="sauce"){
            sauceCounter += 0.2;
        }
    }
    return {
        noodles: noodlesCounter,
        sauce: sauceCounter
    }
}
export function addSecretIngredient(friendsList, myList) {
    let secretIngredient = friendsList[friendsList.length - 1];
    myList.push(secretIngredient);
}


/*
The amounts listed in your cookbook only yield enough lasagna for two portions. Since you want to cook for more people next time, you want to calculate the amounts for different numbers of portions.

Implement a function scaleRecipe that takes two parameters.

A recipe object that holds the amounts needed for 2 portions. The format of the object can be seen in the example below.
The number of portions you want to cook.
The function should return a recipe object with the amounts needed for the desired number of portions. You want to keep the original recipe though. This means, in this task the recipe argument should not be modified.
*/
const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
  };
  
export function scaleRecipe(recipe,numberOfGuests) {
    const scaledRecipe = {};
    for (const ingredient in recipe) {
        scaledRecipe[ingredient] = recipe[ingredient]* (numberOfGuests /2)
    }
    return scaledRecipe;
}