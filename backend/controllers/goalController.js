const asyncHandler = require("express-async-handler")

//@desc Get goals
//@route GET /api/goals
//@access private
const getGoals = asyncHandler(async(req, res) => {
    if(!req.body.text){
        //handle error but its better to use express error 
        res.status(400).json({message: 'please add a text field'}) 

        //express error handler
        // res.status(400)
        // throw new Error('Please add a text')
        // by default the error handler gives us an html page yo change that add a middleware function
    }
    res.status(200).json({message: 'Get Goals'})
})

//@desc Set goal
//@route POST /api/goals
//@access private
const setGoal = asyncHandler(async(req, res) =>{
    res.status(200).json({message: 'Set goal'})
})

//@desc Update goal
//@route PUT /api/goals/:id
//@access private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})

//@desc Delete goals
//@route DELETE /api/goals/:id
//@access private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}