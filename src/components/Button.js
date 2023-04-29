import './Button.css';

const Button = ({ symbol, color, colorButton, click }) => {
    return <div
    onClick={() => click(symbol)}
    className='calculator-buttons' style={{ backgroundColor: color, color: colorButton }}>
        {symbol}
    </div>
}

export default Button;