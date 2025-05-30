import logo from '../assets/logo.png'
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Twitter from '../assets/Twitter.png'
import LinkedIn from '../assets/LinkedIn.png'

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'> 
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt="" className='w-10 inline-block items-center'/><span className='text-white'>UPSKILL</span>
                    </a>
                    <p className='md:w-1/2'>A simple paragraph is comprised of three major components. Which is often a declarative sentence.</p>
                <div>
                    <input type="email" name='email' id='email' placeholder='Your email'className='bg-[#9a7af159] py-2 px-4 rounded-md ocus:outline-none'/>
                    <input type="submit" value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all' />
                </div>
                </div>
                {/* footer items */}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-x1'>Platform</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>Overview</a>
                            <a href="/" className='block hover:text-gray-300'>Features</a>
                            <a href="/" className='block hover:text-gray-300'>About</a>
                            <a href="/" className='block hover:text-gray-300'>Pricing</a>

                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-x1'>Help</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>How does it works?</a>
                            <a href="/" className='block hover:text-gray-300'>Where to ask question?</a>
                            <a href="/" className='block hover:text-gray-300'>How to play?</a>
                            <a href="/" className='block hover:text-gray-300'>What is needed for this?</a>

                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-x1'>Contacts</h4>
                        <ul className='space-y-3'>
                            <p className='hover:text-gray-300'>(012) 1234-567-890</p>
                            <p className='hover:text-gray-300'>upskill@gmail.com</p>
                            <p className='hover:text-gray-300'>MRC Nagar Chennai</p>
                            <p className='hover:text-gray-300'>600028</p>

                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p>@ UPSKILL 2021 --- 2025. All rights reserved</p>
                <div className='flex items-center space-x-5'>
                    <img src={Facebook} alt=""  className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <img src={Instagram} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <img src={Twitter} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <img src={LinkedIn} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>

                </div>
            </div>
        </div>
    );
};

export default Footer;