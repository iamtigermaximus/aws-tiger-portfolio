import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { listProjects } from '../../graphql/queries'
import Particle from '../../components/Particle'
import {
  Container,
  HeadingContainer,
  Heading,
  ProjectContainer,
} from './Portfolio.styles'
import ProjectCard from '../../components/project-card/ProjectCard'

const Portfolio = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])
  async function fetchProjects() {
    const apiData = await API.graphql({ query: listProjects })
    const projectsFromAPI = apiData.data.listProjects.items
    setProjects(projectsFromAPI)
    console.log(projectsFromAPI)
  }
  return (
    <Container>
      <Particle />
      <Fade direction='down'>
        <HeadingContainer>
          <Heading>Projects</Heading>
        </HeadingContainer>
      </Fade>
      <Fade direction='left'>
        <ProjectContainer>
          {projects.map((project) => (
            <ProjectCard
              id={project.id}
              image={project.image}
              title={project.title}
              tech={project.tech}
              demo={project.demoLink}
              github={project.github}
            />
          ))}
        </ProjectContainer>
      </Fade>
    </Container>
  )
}

export default Portfolio
