import React from 'react'
import Layout from '../Template/Layout'
import CourseCard from '../Components/CourseCard'
const Course = () => {
    const CourseList =[
        {title: "Basic React Native",
         duration: "duration 5",
         price: "price 7500",
        },
        {title: "Power BI Dashboard",
            duration: "duration 4",
            price: "price 5500",
           },
           {title: "UI Design with Figma",
            duration: "duration 3",
            price: "price 5000",
           },
           {title: "Cross Platform with Flutter",
            duration: "duration 5",
            price: "price 6500",
           },
    ]
  return (
    <Layout>
      <h1><center>หลักสูตรที่เปิดสอน</center></h1>
      <hr />
      {
    CourseList.map((b)=>(
    <CourseCard key={b.name} {...b} />
    ))
    }
    </Layout>
  )
}

export default Course