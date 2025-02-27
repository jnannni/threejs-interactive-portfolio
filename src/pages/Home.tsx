import GreetingScene from '@components/GreetingScene/GreetingScene';
import Navbar from '@components/Navbar/Navbar';
import About from '@components/About/About';
import './style.css';

const Home = () => {
  return (
    <div className='container home'>
        <Navbar />
        <GreetingScene />
        <About />
    </div>
  )
}

export default Home