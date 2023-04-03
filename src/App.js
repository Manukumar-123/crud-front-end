import * as React from "react";
import Navbar from './cmp/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


const User = React.lazy(()=>import("./cmp/user"));
const AllUser = React.lazy(()=>import("./cmp/allUser"));
const EditUser = React.lazy(()=>import("./cmp/edit"));


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
      <Routes>
      <Route exact path="/" element={
              <React.Suspense fallback={<CircularProgress className="loader" />}>
                <User />
              </React.Suspense>
            } />
         <Route exact path="/all" element={
              <React.Suspense fallback={<CircularProgress className="loader" />}>
                <AllUser />
              </React.Suspense>
            } />
         <Route exact path='/edit/:id' element={
              <React.Suspense fallback={<CircularProgress className="loader" />}>
                <EditUser />
              </React.Suspense>
            } />
      </Routes>
    </BrowserRouter>
    </>
      )
}

export default App;
