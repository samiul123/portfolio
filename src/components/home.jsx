const Home = (props) => {
    return (
        <div
            id={props.id}
            key={props.id}
            className='text-white'>
            <h1 className="p-10 text-8xl font-bold font-lulo">I
                <span className='text-custom-green'>'</span>M <br/>
                SAMIUL <br/>
                MUSHFIK
                <span className='text-custom-green'>.</span>
            </h1>
            <h3 className='p-10 text-3xl'>
                SOFTWARE ENGINEER & <br/>
                DATA SCIENCE ENTHUSIAST
            </h3>
        </div>
    )
}

export default Home;