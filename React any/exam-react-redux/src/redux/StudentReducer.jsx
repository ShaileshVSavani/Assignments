import { ADD_STUDENT, DELETE_STUDENT, GET_STUDENT, UPDATE_STUDENT } from "./ActionType"

const initialState ={
    students :[],
   
}

const StudentReducer = (state = initialState, {type , payload}) => {
    switch(type){
        case GET_STUDENT:
            return {...state, students: payload}
        case ADD_STUDENT:
            return {...state, students: [...state.students, payload]}
        case UPDATE_STUDENT:
            return {...state, students: state.students.map(student => student.id === payload.id? payload : student)}
        case DELETE_STUDENT:
            return {...state, students: state.students.filter(student => student.id!== payload)}   
        default:
            return state
    }
}

export default StudentReducer;