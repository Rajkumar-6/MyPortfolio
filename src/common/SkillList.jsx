function SkillList({src,skill}) {
  return (

        <span>
            <img src={src} alt="CheckMarkIcon"/>
            <p>{skill}</p>
        </span>
  )
}

export default SkillList