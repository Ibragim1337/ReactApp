function Div() {
    return (
        <div
            className="app"
            id='test-id' 
            onClick={() => console.log(" CONSOLE LOG!!!")} 
            onMouseEnter={(e) => e.target.style.backgroundColor = 'red' } 
            onMouseLeave= {(e) => e.target.style.backgroundColor = 'white'}
        >
            Hello World!!!
        </div>
        
    )
}

export default Div;