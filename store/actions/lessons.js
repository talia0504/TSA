export const SET_LESSONS = 'SET_LESSONS'

export const getLessons = () => {
    return async (dispatch, getState) => {
        const response = await fetch(`https://students-scheduler-default-rtdb.europe-west1.firebasedatabase.app/lessons.json`)
        var lessons = await response.json()

        if (!response.ok) {
            console.log(lessons.error)
            throw new Error('Something went wrong')
        }

        await dispatch({
            type: SET_LESSONS,
            lessons: lessons
        })

    }
}

export const addLesson = (lesson) => {
    return async (dispatch, getState) => {
        const response = await fetch(`https://students-scheduler-default-rtdb.europe-west1.firebasedatabase.app/lessons/${lesson.id}.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lesson)
        })

        const resData = await response.json()

        if (!response.ok) {
            console.log(resData.error)
            throw new Error('Something went wrong')
        }

        await dispatch(getLessons())
    }
}


export const updateLesson = (lesson) => {
    return async (dispatch, getState) => {
        const response = await fetch(`https://students-scheduler-default-rtdb.europe-west1.firebasedatabase.app/lessons/${lesson.id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lesson)
        })

        const resData = await response.json()

        if (!response.ok) {
            console.log(resData.error)
            throw new Error('Something went wrong')
        }

        await dispatch(getLessons())
    }
}

export const deleteLesson = (lesson) => {
    return async (dispatch, getState) => {
        const response = await fetch(`https://students-scheduler-default-rtdb.europe-west1.firebasedatabase.app/lessons/${lesson.id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const resData = await response.json()

        if (!response.ok) {
            console.log(resData.error)
            throw new Error('Something went wrong')
        }
        
        await dispatch(getLessons())
    }
}