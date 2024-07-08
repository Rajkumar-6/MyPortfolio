import React from 'react'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard';
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import Hipsster from '../../assets/hipsster.png' 
function Projects() {
  return (
   <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard link='www.github.com' src={viberr} h3="Viberr" p="Streaming App"/>
            <ProjectCard link='www.github.com' src={freshBurger} h3="FreshBurger" p="Streaming App"/>
            <ProjectCard link='www.github.com' src={Hipsster} h3="Hipsster" p="Streaming App"/>
        </div>
    
   </section>
  )
}

export default Projects;