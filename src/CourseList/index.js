import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CourseList = () => {
    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();

    function addCourse() {
        dispatch({ type: 'ADD_COURSE', title: 'GraphQL' })
    }

    return (
        <>
            <ul>
                { courses.map(courses => <li key={courses} >{courses}</li>) }
            </ul>
            <button type="button" onClick={addCourse} >
                Adicionar curso
            </button>
        </>
    )  
};

export default CourseList;
