import * as express from 'express'

import { createProject, deleteProject, getProject, getProjects, updateProject } from '../controller/projectController'

const router = express.Router()

router.route('/').get(getProjects).post(createProject)

router.route('/:id').get(getProject).put(updateProject).delete(deleteProject)



// router.get('/', getProjects)

// router.post('/create', createProject)

// router.get('/get/:id', getProject)

// router.put('/update/:id', updateProject)

// router.delete('/delete/:id', deleteProject)

export default router