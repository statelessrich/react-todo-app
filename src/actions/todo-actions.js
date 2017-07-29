export const addTodo = (text) => {
    // return action
    return {
        // action id
        type: 'ADD_TODO',
        // payload
        text
    };
};

export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        index
    };
};

export const updateTodo = (payload) => {
    return {
        type: 'UPDATE_TODO',
        payload
    };
};