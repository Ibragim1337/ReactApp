import Button from '../../Button/Button'

const ButtonMinus = ({setCount}) => {
    const minus = () => {
        setCount(prevCount => prevCount - 1);
      }
    return (
        <Button qorwok={minus}>-</Button>
    )
}

export default ButtonMinus;