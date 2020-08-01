const db = require('../data/db-config.js');
const { json } = require('express');

module.exports= {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db("recipes")
}

function getShoppingList(){
    return db("ingredients")
}

function getInstructions(){
    return db("instructions")

}