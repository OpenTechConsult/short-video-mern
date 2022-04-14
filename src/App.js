import react from 'react';
import './App.css';
import Video from './components/video.component';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
