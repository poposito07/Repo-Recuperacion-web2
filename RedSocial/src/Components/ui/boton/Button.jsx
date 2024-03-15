import './Button.css'

const Button = ({ children, ancho = "0",altura = "0", borderRadius = "0px", color = "black", colorLetra = "black", tamañoLetra, margenDerecho }) => (
    <button 
      className='button' 
      style={{ 
        width: `${ancho}%`,
        height: `${altura}%`,
        borderRadius: borderRadius,
        backgroundColor: color,
        color: colorLetra,
        fontSize: `${tamañoLetra}%`,
        marginRight: `${margenDerecho}%`
      }} 
    >
      {children}
    </button>
  );
  
  export default Button;
  