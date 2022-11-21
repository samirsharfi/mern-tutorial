const express = require('express');
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

//instead of use endpoint use / if you hit /api/goals it will look to this file
// its better to put our body function in another folder(controller)

//create a routes

// route for open endpoint
// middleware for handling 

// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

// more clear
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router