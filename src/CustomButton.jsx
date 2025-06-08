

function CustomButton(passedValue) {

    return (
        <div onClick={function() {
            passedValue["setCount"](passedValue.count + 1);
        }}>
            Counter value is {passedValue.count}
        </div>
    )
}   


export default CustomButton;