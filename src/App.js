import './App.css';
import Header from './components/header';
import MainHeading from './components/mainheading';
import Name from './components/namesection';
import Quotation from './components/quotesection';
import WorkSection from './components/worksection';
import Contact from './components/contactsection';

function App() {
  return (
    <>
      <Header/>
      <MainHeading/>
      <Name /> 
      <Quotation />
      <WorkSection/>
      <Contact/>
      
      {/* <SelectedWork/> */}
    </>
    )
}

export default App;
