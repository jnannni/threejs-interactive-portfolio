import './style.css';

const languages = [
    {
        "name": "Russian",
        "level": "100"
    },
    {
        "name": "English",
        "level": "95"
    },
    {
        "name": "German",
        "level": "60"
    }
]
const LanguageSkills = () => {    
  return (
    <div>
        <h2>Languages</h2>
        {languages.map((language, index) => 
            <div key={index}>
                <h4>{language.name}</h4>
                <div className='language-bar'><div className='level' style={{width: language.level + '%'}}></div></div>
            </div>)}
    </div>    
  )
}

export default LanguageSkills