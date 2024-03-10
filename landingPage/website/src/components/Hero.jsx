const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>Your Feet Deserve The Best</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
                    tenetur. Alias optio quae, magni cumque ex rerum esse illum unde earum placeat mollitia dolor!</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary_button">Category</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/men.png" alt="" />
            </div>
        </main>
    )
};
export default Hero;