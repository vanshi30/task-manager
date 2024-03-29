const express = require('express')
const router = express.Router()
const {createTask,getAllTasks,getOneTask,updateTask,deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask)
module.exports = router