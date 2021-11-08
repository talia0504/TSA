import { SET_LESSONS } from '../actions/lessons'

const initialState = {
    lessons: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LESSONS:
            return {
                lessons: Object.entries(action.lessons)
            }
        default:
            return state
    }
}