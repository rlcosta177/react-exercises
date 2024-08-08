import PropTypes from 'prop-types';

export function Student(props) {

    return (
        <>
            <div className="student">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    )
}

// usefull for debuging. sends a warning whenever the value types differ
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// gives a default value to to a component call that doesnt pass any of the expected values
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student
