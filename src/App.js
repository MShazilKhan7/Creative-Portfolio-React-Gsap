import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import MainHeading from './components/mainheading';
import Name from './components/namesection';
import Quotation from './components/quotesection';
import WorkSection from './components/worksection';

let works = [
  {
      url:  './images/01.jpg'
  },
  {
      url:  './images/04.jpg'
  },
  {
      url:  '/images/03.jpg'
  },
  // {
  //     url:  '/images/04.jpg'
  // },
  // {
  //     url:  '/images/05.jpg'
  // },
  // {
  //     url:  './images/01.jpg'
  // },
  // {
  //     url:  './images/04.jpg'
  // },
  // {
  //     url:  '/images/03.jpg'
  // },
  // {
  //     url:  '/images/04.jpg'
  // },
]

let item = {url: './images/04.jpg'}
function App() {
  return (
    <>
      <Header/>
      <MainHeading/>
      <Name /> 
      <Quotation />
      <WorkSection item={item}/>

      {/* <SelectedWork/> */}
    </>
    )
}

export default App;
