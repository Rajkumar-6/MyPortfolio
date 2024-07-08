import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
function Skills() {
  return (
    <section id="skills" className={styles.container}>
       <h1 className='sectionTitle'>Skills</h1>
       <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="ReactJs"/>
       </div>
       <hr/>
       <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Java"/>
            <SkillList src={checkMarkIcon} skill="Jdbc&Servlets"/>
            <SkillList src={checkMarkIcon} skill="Spring"/>
            <SkillList src={checkMarkIcon} skill="SpringBoot"/>
       </div>
       <hr/>
       <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="Tomcat Apache"/>
            <SkillList src={checkMarkIcon} skill="Figma"/>
            <SkillList src={checkMarkIcon} skill="Bootstrap"/>
       </div>
    </section>
  )
}

export default Skills