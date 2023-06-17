import {Box} from '@mui/material';

//components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Stats from "./components/home/Stats";
import AddStudent from "./components/home/AddStudent";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop:"76px"}}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/addstudent' element={<AddStudent/>}></Route>
            <Route path='/statistics' element={<Stats/>}></Route>
          </Routes>
        </Box>
        <Footer/>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;