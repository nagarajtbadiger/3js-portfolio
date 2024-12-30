import React from 'react'
import ProjectLayout from './ProjectLayout'

const ProjectList = ({projects}) => {
  return (
      <div className='w-full xl:max-w-4xl lg:px-16 space-y-8 flex flex-col items-center'>
          {projects.map((project, index) => {
              return <ProjectLayout key={index} {...project} />
          })}
    </div>
  )
}

export default ProjectList