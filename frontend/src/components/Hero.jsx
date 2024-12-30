import React from 'react'

import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import CourseCard from './CoursesCard'

function Hero() {
  return (
    <section className="text-gray-600  body-font">
      <div className="container max-w-screen-xl  px-5 py-24 mx-auto">

        <div className="flex flex-wrap -m-4">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          

        </div>
      </div>
    </section >

  )
}

export default Hero