import { Request, Response} from "express";
import mongoose from "mongoose";
import Project from '../models/projectModel'

const asyncHandler = require('express-async-handler')




//@desc Get all projects
//@route Get /api
//@access Public
export const getProjects = asyncHandler(async (req: Request, res: Response) => {
    const projects = await Project.find()

    res.status(200).json(projects)
})




//@desc Create Project
//@route POST /api
//@access Private
export const createProject = asyncHandler(async(req: Request, res: Response) => {

    if (!req.body.title) {
        res.status(400)
        throw new Error('Title is required')
    }

    const project = await Project.create(req.body)
    if (!project) {
        res.status(404)
        throw new Error('Project not created')
    }

    res.status(201).json({project})
})





//@desc Get Single Project
//@route GET /api/:id
//@access Public
export const getProject = asyncHandler(async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error(`${req.params.id} is not a valid id`)
    }

    const project = await Project.findById(req.params.id);
    if (!project) {
        res.status(404)
        throw new Error('Project not found')
    }
    res.status(200).json(project)
})




//@desc Update Project
//@route PUT /api/:id
//@access Private
export const updateProject = asyncHandler(async (req: Request, res: Response) => {

    if (!req.body.title) {
      res.status(400);
      throw new Error("Title is required");
    }


    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400);
      throw new Error(`${req.params.id} is not a valid id`);
    }

const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if (!project) {
      res.status(404);
      throw new Error("Project not found");
    }
    res.status(201).json(project)
})



//@desc Delete project
//@route DELETE /api/:id
//@access Private
export const deleteProject = asyncHandler(async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400);
      throw new Error(`${req.params.id} is not a valid id`);
    }


    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
        res.status(404)
        throw new  Error('Project not found')
    }

    res.status(200).json({ message: `Delete Project ${req.params.id} deleted`, project : project})
})