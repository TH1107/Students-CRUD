import './App.css';
import NavBar from './components/NarBar';
import Contents from './components/Contents';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <div className="">
      <NavBar/>
      <Contents
      />
    </div>
    <ToastContainer>
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce, 
    </ToastContainer>
    </>
  );
}

export default App;
