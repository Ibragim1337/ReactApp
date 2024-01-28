import Div from './components/Div/Div'
import FullName from './components/FullName/FullName';
import Form from './components/Form/Form';
import './App.css';


function App() {
  return (
    <>
    <div className='App-logo'></div>
    <Div />
    <Form />
    <FullName name='Ibragim' surname='Alakparov'/>
    <FullName name='ronaldu' surname='christiano'/> 
    </>
  );
}

export default App;
