import React from 'react'

const CourseCard = (props) => {
  return (
    <div style={divStyle}>
      <p style={textStyle}>
        <strong>{props.title}</strong>
      </p>
      <p style={textStyle}>{props.duration}</p>
      <p style={textStyle}>{props.price}</p>
    </div>
  )
}

const divStyle = {
  border: "1px solid black",
  borderRadius: 5,
  padding: 20,
  marginBottom: 15,
};
const textStyle = {
  fontSize: 20,
  marginBottom: 10,
};

export default CourseCard
