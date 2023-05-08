import { Menu } from '../../components';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <>
      <Menu />
      <div className="App">
        <div className="inicio">
          <div className="left">
            <h2 className="mb-4">Hello world, it's me</h2>
            <h1>Jesus Saul Hdez</h1>
            <h2>
              <span className="highlight">Front End Developer</span>
            </h2>
            <div>
              <a
                href="https://pollitos-blog.netlify.app/assets/resumes/Resume-Jes%C3%BAs_Casta%C3%B1eda-Full_Stack.pdf"
                target="_blank"
              >
                <button className="button button-filled">View CV</button>
              </a>
            </div>
          </div>
          <div className="right">
            <img
              src="https://th.bing.com/th/id/R.218037c9559f9b69c2426e174df6a9ad?rik=ppnJQ1WLI4Aj3Q&pid=ImgRaw&r=0"
              alt="placeholder"
            />
          </div>
        </div>

        <div className="skills">
          <h1>
            My <span className="highlight">Skills</span>
          </h1>
          <div className="container">
            <div className="image-container">
              <img
                src="https://th.bing.com/th/id/R.31b0f106251056ff7476c12eeb53c02a?rik=redKZdvLnSOHug&pid=ImgRaw&r=0"
                alt="Angular"
              />
              <div className="description">
                <h3>Angular</h3>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://1.bp.blogspot.com/-mzw13XQJPYM/XgzNHXSUdXI/AAAAAAAAAYY/xeIhLBEpTQUn8huUCnWXdUX6vIR_T4UCQCPcBGAYYCw/s1600/http___pluspng.com_img-png_nodejs-png-nodejs-icon-png-50-px-1600.png"
                alt="Node"
              />
              <div className="description">
                <h3>Node</h3>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                alt="Ts"
              />
              <div className="description">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutme">
          <h1>
            About <span className="highlight">Me </span>
          </h1>
          <p>
            I am a web developer with over 2 years of experience. During my
            career, I have actively participated in the complete development
            cycle of web applications. This includes working with diverse teams,
            designing user interfaces, and implementing best practices that
            consider the performance of the system..
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
