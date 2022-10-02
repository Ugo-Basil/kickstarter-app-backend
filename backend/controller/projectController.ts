import { Request, Response} from "express";

//@desc Get all projects
//@route Get /api
//@access Public
export const getProjects = (req:Request, res:Response ) => {
    res.status(200).json({
        message: 'Get All Projects'
    })
}

//@desc Create Project
//@route POST /api
//@access Private
export const createProject = (req: Request, res: Response) => {
    res.status(201).json({message: 'Create project'})
}


//@desc Get Single Project
//@route GET /api/:id
//@access Public
export const getProject = (req: Request, res: Response) => {
    res.status(200).json({message: `Get Project ${req.params.id}`})
}


//@desc Update Project
//@route PUT /api/:id
//@access Private
export const updateProject = (req: Request, res: Response) => {
    res.status(201).json({message: `Update Project ${req.params.id}`})
}

//@desc Delete project
//@route DELETE /api/:id
//@access Private
export const deleteProject = (req: Request, res: Response) => {
    res.status(204).json({ message: `Delete Project ${req.params.id}`})
}