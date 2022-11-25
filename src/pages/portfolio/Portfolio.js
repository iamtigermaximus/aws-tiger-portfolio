import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { listProjects } from '../../graphql/queries'

const Container = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  padding-left: 15vw;
`

const ProjectContainer = styled.div``

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
      <ProjectContainer>
        {projects.map((project) => (
          <h1 key={project.id}>{project.title}</h1>
        ))}
      </ProjectContainer>
    </Container>
  )
}

export default Portfolio
