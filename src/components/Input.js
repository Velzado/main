import './Input.css';

const Input = ({ firstNumber, secondNumber, operation, result }) => {
    return (
    <div className='input'>
        <div className='result'>
            <h1>{result}</h1>
        </div>

        <div className='text'>
            <h3>{firstNumber} {operation} {secondNumber}</h3>
        </div>
        </div>
    );
};

export default Input;