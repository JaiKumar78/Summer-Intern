import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import './App.css'

function App() {

  return (
    <>
      <div className="app">
        <div className="banner">
          <img src="../src/assets/banner.jpg" alt="" />
        </div>
        <div className="navigation">
          <ul className='menu'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            {/* <li><a href="#facilities">Facilities</a></li> */}
            <li><a href="#register">Register</a></li>
          </ul>
        </div>
        <div className="home" id='home'>
          <div className="transbox">
            <h1 className='clgname'>St. Joseph's Institute of Technology</h1>
            <h2 className='deptname'>Department of Artificial Intelligence & Data Science <br /> presents</h2>
            <p className='event'>Summer Internship'24</p>
            <a href="#register" className='enroll'>Enroll Now&#8594;</a>
          </div>
        </div>
        <div className="about" id='about'>
          <div className='clgdetails'>
            <h2 className='greetings'>Welcome to St. Joseph's Institute of Technology</h2>
            <p>St. Joseph’s Institute of Technology is a higher education institution in OMR, Chennai, India, established in the year 2011, with 6 UG courses (B.E. – CSE, ECE, EEE & Mech. Engg., B.Tech. IT & B.Tech Artificial Intelligence and Data Science) is offered from the year 2021. MBA is offered from the year 2022.</p>
            <p>Our college is affiliated to the Anna University and approved by AICTE. The courses offered from the inception (B.E. – CSE, ECE & Mech. Engg. & B.Tech. IT) have been accredited by NBA in 2017 in the shortest span of 6 years since inception, and granted Autonomous status by UGC  in 2022 which ascertains our quality.</p>
            <a href="https://stjosephstechnology.ac.in" target='_blank' className='clgsite'>Know Our College</a>
          </div>
          <div className='campustour'>
            <iframe height={300} width={500} src="https://www.youtube.com/embed/ZR8yABercd8?mute=1&controls=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  frameborder="0"
            title="Embedded youtube"/>
          </div>
        </div>
        <div className="deptdetails">
          <h2 className='deptgreetings'>Department of Artificial Intelligence & Data Science</h2>
          <p>Artificial Intelligence and Data Science Program is introduced from the Academic Year 2021-22.</p>
          <div>
            <h3>Vision</h3>
            <p>To promote highly Ethical and Innovative Computer Professionals through excellence in teaching, training and research</p>
            <h3>Mission</h3>
            <p>To produce globally competent professionals, motivated to learn the emerging technologies and to be innovative in solving real world problems.</p>
            <p>To promote research activities amongst the students and the members of faculty that could benefit the society.</p>
            <p>To impart moral and ethical values in their profession.</p>
          </div>
          <div className='deptsite'>
            <a href="https://stjosephstechnology.ac.in/web/ads/" target='_blank'>Department Website</a>
            <a href='' target='_blank'>News Letter</a>
          </div>
        </div>
        <div className="courses" id='courses'>
            <h2>Course Details</h2>
            <p>Experience personalized courses and enhance your knowledge in various domains</p>
            <p>Educate yourself in this 5 days program with the avaliable slot before it expires!</p>
            <ImageSlider slides={SliderData}/>
            <div className="venue">
              <p><img src="../src/assets/google-maps.png" alt="google-maps" /> - St. Joseph's Innstitute of Technology</p>
              <p><img src="../src/assets/calendar.png" alt="" /> - 15th April 2024 to 24th April 2024</p>
            </div>
        </div>
        <div className="facilities" id='facilities'>
          <h2>College Facilities</h2>
          <p>Our College is equiped with sophisticated labs and systems where you can practically experience learning.</p>
          <p>Breakfast & Lunch will be provided along with transportation.</p>
          <p>Participants are being provided with Certifications.</p>
        </div>
        <div className='register' id='register'>
          <h2>Event Poster</h2>
          <div className='poster'>
            <img src="../src/assets/newposter.jpg" alt="poster" />
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeisROVUpsZfvlgFqvFOn3IDwi-CTa_k2kkq-CbaX-jmX5Shg/viewform"  target='_blank' className='regbutton'>Register</a>
        </div>
        <div className="footer">
          <div className='subfooter'>
            <div className='location'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5877108359487!2d80.2158546758562!3d12.869884617098613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bbb618d3ea9%3A0x90b3767be093efaa!2sSt.Joseph&#39;s%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1706878112647!5m2!1sen!2sin" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
            <div className='address'>
              <img src="../src/assets/FooterLogo.png" alt="" />
              <p>St. Joseph's epitomizes academic excellence and character formation, creating a nurturing environment for holistic development. With a legacy deeply rooted in values, this institution fosters not only intellectual growth but also instills a sense of responsibility and compassion. The vibrant campus is a melting pot of diverse talents, where students are encouraged to explore their potential and contribute meaningfully to society.  </p>
            </div>
            <div className="otherdetails">
              <div>
                <img src="../src/assets/placeholder.png" alt="pointer" /> 
                <p>Old Mamallapuram Road, Semmancheri, Chennai, Tamil Nadu 600119</p>   
              </div>
              <div>
                <img src="../src/assets/mail.png" alt="mail" />         
                <p>stjosephstechnology@stjosephstechnoloy.ac.in</p>
              </div>
              <div>
                <img src="../src/assets/call.png" alt="call" /> 
                <p>044 2450 3132</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className='copyrights'>
          <p>© 2024 St Joseph's Institute Of Technology All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default App
