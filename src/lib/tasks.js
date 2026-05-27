import tasks from '../data/tasks.json';

export const getTasks = async() => {
    return tasks;
}

export const postTask = async (newTask) => {
    newTask.id = tasks.length+1;
    tasks.unshift(newTask);     // to add at the beginning
    // tasks.push(newTask);     // to add at the end

    return {ok: true, message: 'Task added successfully'};
}