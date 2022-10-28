function App() {
    const name = "iman"

    const x = false

    return(
        <div className="container">
            <h1>Hello World</h1>
            <h2>Hello {x ? 'Yes' : 'No'}</h2>
        </div>
    )
}

export default App;