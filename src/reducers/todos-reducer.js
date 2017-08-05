export default (state = [], action) => {
    // Check dispatched action and update state.
    const todos = Object.assign([], state);

    switch (action.type) {
        case 'ADD_TODO':
            // Return new array with new todo.
            return Object.assign([], state, [
                ...state,
                {
                    text: action.text,
                    done: false,
                    mouseover: false
                }
            ]);

        case 'DELETE_TODO':
            // Return new array without todo.
            todos.splice(action.index, 1);
            return todos;

        case 'UPDATE_TODO':
            // Return new array with updated todo.
            return todos.map((todo, index) => {
                if (index !== action.payload.index) {
                    return todo;
                }

                return action.payload.newTodo;
            });

        default:
            return state;
    }
};
