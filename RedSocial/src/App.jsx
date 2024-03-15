import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Perfil from './Components/ui/publicacion/Perfil';
import Feed from './Pages/Feed/Feed';


function App() {
    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<Feed/>}/>
                <Route path='/perfil' element={<Perfil/>}/>
            </Routes>
        </Router>
     );
}

export default App;