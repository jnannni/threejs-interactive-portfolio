import LanguageSkills from '@components/Skills/LanguageSkills';
import TechSkills from '@components/Skills/TechSkills';
import './style.css';
import { ScrollControls } from '@react-three/drei';

const About = () => {
  return (
    <div className='about-container'>        
        <TechSkills />
        <LanguageSkills />
    </div>    
  )
}

export default About