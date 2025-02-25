import GreetingScene from '../components/GreetingScene/GreetingScene';
import Navbar from '../components/Navbar/Navbar';
import './style.css';

const Home = () => {
  return (
    <div className='container home'>
        <Navbar />
        <GreetingScene />
    </div>
  )
}

export default Home