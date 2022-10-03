import ProjectModel from "../models/projectModel";
import { ProjectType } from "../types/projectTypes";
import { checkIsValidObjectId } from "../database/db";
import { sanitizeProject } from "../sanitizers/projectSanitizer";


export async function getProjects(): Promise<ProjectType[]> {
    
    try {
        const projects = await ProjectModel.find();
        if (!projects) {
            throw new Error('No projects found')
        }
        return projects;
    } catch (err) {
        throw new Error('Error getting projects')
    }
}

export async function createProject(project: ProjectType): Promise<ProjectType> {
    const sanitizedProject = sanitizeProject(project);
    try {
        const newProject = await ProjectModel.create(sanitizeProject)
        if (!newProject) {
            throw new Error('Failed to create project');
        }
        return newProject
    } catch (err) {
        throw new Error('Error creating project')
    }
    
}

export async function getProjectById(projectId: string): Promise<ProjectType>{
     checkIsValidObjectId(projectId);
    try {
        const project = await ProjectModel.findById(projectId)
        if (!project) {
            throw new Error('Project not found');
        }
        return project
    } catch (err) {
        throw new Error('Error finding project');
    }
}


export async function updateProject(projectId: string, project: ProjectType): Promise<ProjectType>{
    checkIsValidObjectId(projectId);
    const sanitizedProject = sanitizeProject(project)
    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, sanitizedProject, {new:true})
        if (!updatedProject) {
            throw new Error('Failed to update project')
        }
        return updatedProject;
    } catch (err) {
        throw new Error('Error updating project')
        
    }
} 


export async function deleteProject(projectId: string): Promise<void>{
    checkIsValidObjectId(projectId);
    try {
        const project = await ProjectModel.findByIdAndDelete(projectId)

        if (!project) {
            throw new Error('Failed to delete project')
        }
        return;
    } catch (err) {
        throw new Error('Error deleting project')
    }
}