const express = require('express');

const Db = require('./recipe-model.js');
const dbConfig = require('../data/db-config.js');

const router = express.Router();

router.get('/recipes', (req, res) => {
    Db.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/ingredients', (req,res) => {
    Db.getShoppingList()
        .then(ingredients =>{
            res.status(200).json(ingredients)
        })
        .catch(err =>
            res.status(500).json({ errormessage: 'couldnt get ingredients.'}))
})

router.get('/instructions', (req,res) => {
    Db.getInstructions()
        .then(ingredients =>{
            res.status(200).json(ingredients)
        })
        .catch(err =>
            res.status(500).json({ errormessage: 'couldnt get ingredients.'}))
})

// router.get('/instructions', (req,res) => {
//     db('instructions')
//         .then(instructions =>{
//             res.status(200).json(instructions)
//         })
//         .catch(err =>
//             res.status(500).json({ errormessage: 'couldnt get ingredients.'}))
// })

module.exports = router;