import faces from '../../../../public/img/faces.jpeg';
import '../input/Image.css';


const App = () => {
    return (
        <div className="imagen-foto">
            <img  src={faces} alt="overlay" className="overlay-image" />
        </div>
    );
};

export default App;