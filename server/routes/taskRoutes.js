const fetchUser = require('../middlewares/Auth');

const {createTask, editTask, deleteTask, getCompletedTask, getInProgressTask,getTodoTask,getUnderReviewTask} = require('../controllers/task');


const router = require('express').Router();


router.post('/create', fetchUser, createTask);
router.put('/edit/:id', fetchUser, editTask);
router.delete('/delete/:id', fetchUser, deleteTask);
router.get('/todo', fetchUser, getTodoTask);
router.get('/completed', fetchUser, getCompletedTask);
router.get('/under-review', fetchUser, getUnderReviewTask);
router.get('/in-progress', fetchUser, getInProgressTask);


module.exports = router;