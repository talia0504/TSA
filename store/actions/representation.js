export const ACADEMIC_INSTITUTES = 'ACADEMIC_INSTITUTES'
export const READ_ALL_USERS = 'READ_ALL_USERS'

import institutesList from '../../data/world-universities'

export const fetchInstitutes = () => {
    return async dispatch => {

        var list = institutesList.split('\n').map(institue => institue.split(',')[1])

        list = list.filter((x,y) => list.indexOf(x) == y).sort((a, b) => a.localeCompare(b))
        dispatch({
            type: ACADEMIC_INSTITUTES,
            institutesList: list
        })

    }
}

export const readAllUsers = () => {
    return async dispatch => {
        let time1 = performance.now();
        const response = await fetch(`https://students-scheduler-default-rtdb.europe-west1.firebasedatabase.app/users.json`)
        let time2 = performance.now();
        console.log(time2 - time1)
        var users = await response.json()

        if (!response.ok) {
            console.log(resData.error)
            throw new Error('Something went wrong')
        }

        dispatch({
            type: READ_ALL_USERS,
            usersList: {admins: Object.entries(users.admins), tutors: Object.entries(users.tutors), students: Object.entries(users.students)}
        })
    }
}

