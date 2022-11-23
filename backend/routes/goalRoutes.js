const express = require('express');
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController');
const { protect } = require('../middleware/authMiddleware');

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
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router