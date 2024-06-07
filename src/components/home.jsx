const Home = (props) => {
    return (
        <div
            id={props.id}
            key={props.id}
            className='text-white'>
            <h1 className="xl:text-8xl lg:text-6xl md:text-5xl text-4xl font-bold font-lulo">I
                <span className='text-custom-green'>'</span>M <br/>
                SAMIUL <br/>
                MUSHFIK
                <span className='text-custom-green'>.</span>
            </h1>
            <h3 className='mt-5 mb-5 lg:text-3xl text-xl'>
                SOFTWARE ENGINEER & <br/>
                DATA SCIENCE ENTHUSIAST
            </h3>
        </div>
    )
}

export default Home;