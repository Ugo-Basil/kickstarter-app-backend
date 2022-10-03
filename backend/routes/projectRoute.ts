import * as express from 'express'

import { createProjectHandler, deleteProjectHandler, getProjectHandler, getProjectsHandler, updateProjectHandler } from '../controller/projectController'

const router = express.Router()

router.route('/').get(getProjectsHandler).post(createProjectHandler)

router.route('/:id').get(getProjectHandler).put(updateProjectHandler).delete(deleteProjectHandler)



// router.get('/', getProjects)

// router.post('/create', createProject)

// router.get('/get/:id', getProject)

// router.put('/update/:id', updateProject)

// router.delete('/delete/:id', deleteProject)

export default router