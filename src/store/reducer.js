
const init = {
    todo: [],
    todoInput: ''
}
function reducer(state, action) {
    switch (action.type) {
        case 'changeInput':
            console.log(action.payload)
            return { ...state, todoInput: action.payload }
        case 'add':
            return { ...state, todo: [...state.todo, action.payload] }
        default:
            break;

    }
};
export { init }
export default reducer;