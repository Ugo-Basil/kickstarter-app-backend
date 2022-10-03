import { Request, Response} from "express";

const asyncHandler = require('express-async-handler')
import { createProject, deleteProject, getProjectById, getProjects, updateProject } from "../services/projectService";




//@desc Get all projects
//@route Get /api
//@access Public
export const getProjectsHandler = asyncHandler(async (req: Request, res: Response) => {
    const projects = await getProjects()

    res.status(200).json(projects)
})


//@desc Create Project
//@route POST /api
//@access Private
export const createProjectHandler = asyncHandler(async(req: Request, res: Response) => {

    const createdProject = await createProject(req.body)
   
    res.status(201).json({createdProject})
})





//@desc Get Single Project
//@route GET /api/:id
//@access Public
export const getProjectHandler = asyncHandler(async (req: Request, res: Response) => {
    const project = await getProjectById(req.params.id);
   
    res.status(200).json(project)
})




//@desc Update Project
//@route PUT /api/:id
//@access Private
export const updateProjectHandler = asyncHandler(async (req: Request, res: Response) => {

const project = await updateProject(req.params.id, req.body)
    
    res.status(201).json(project)
})



//@desc Delete project
//@route DELETE /api/:id
//@access Private
export const deleteProjectHandler = asyncHandler(async (req: Request, res: Response) => {

    await deleteProject(req.params.id);
   
    res.status(200).json({ message: `Delete Project ${req.params.id} deleted`})
})