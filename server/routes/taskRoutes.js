const fetchUser = require('../middlewares/Auth');

const {createTask, editTask, deleteTask} = require('../controllers/task');


const router = require('express').Router();


router.post('/create', fetchUser, createTask);
router.put('/edit/:id', fetchUser, editTask);
router.delete('/delete/:id', fetchUser, deleteTask);

module.exports = router;