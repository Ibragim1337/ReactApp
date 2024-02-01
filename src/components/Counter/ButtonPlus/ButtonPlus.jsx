import Button from '../../Button/Button'

const ButtonPlus = ({setCount}) => {
    const plus = () => {
        setCount(prevCount => prevCount + 1);
      }
    return (
        <Button qorwok={plus}>+</Button>
    )
}

export default ButtonPlus;