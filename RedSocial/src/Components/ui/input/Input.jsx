import './input.css';

const Input = ({ tipo, placeholder, altura, ancho }) => (
<input
            type={tipo}
            placeholder={placeholder}
            style={{
                height: `${altura}%`,
                width: `${ancho}%`
            }}
            required
        />
);

export default Input;