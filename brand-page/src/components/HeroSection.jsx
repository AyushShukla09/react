import shoe from './../images/shoe_image.png'
import amazon from './../images/amazon.png'
import flipkart from './../images/flipkart.png'


export default function HeroSection(){
    return (
        <main className='hero'>
            <div className='hero-content'>
                <h1>
                    YOUR FEET DESERVE THE BEST
                </h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <p>Also Available On</p>
                <div>
                    <img src={amazon} alt="amazon-img" />
                    <img src={flipkart} alt="flipkart-img" />
                </div>
            </div>

            <div className='hero-image'>
                <img src={shoe} alt="show-image" />
            </div>


        </main>
    )
}