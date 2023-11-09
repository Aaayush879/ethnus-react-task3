import logo from './logo.svg';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
  return (
    <div class="background d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center h1 fw-bold">Color Picker</h1>
      <ColorPicker/>
    </div>
  );
}

export default App;
