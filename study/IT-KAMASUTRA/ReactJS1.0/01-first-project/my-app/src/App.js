// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className = 'header'>
        <img alt="" src="https://w7.pngwing.com/pngs/312/1018/png-transparent-orange-blue-and-black-logo-logo-circle-technology-circle-blue-text-information-technology.png" />
      </header>
      <nav className = 'nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className = 'content'>
        <div><img alt ="" src ="https://vsthemes.org/uploads/posts/2018-12/1581997520_american-landscape_vsthemes_ru-33.jpg" /></div>
      <div>ava + description</div>
      <div>posts
        <div>new post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;