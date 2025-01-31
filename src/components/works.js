import React from "react";
import { ReactComponent as Arrow } from "../assets/about-line.svg";
import { ReactComponent as Stars } from "../assets/stars.svg";

const Works = () => {
  return (
    <section className="work-container" id="my-works">
      <Arrow id="works-arrow" />
      <Stars id="works-stars" />
      <h3>My works</h3>
      <div className="work-grid-container">
        <a
          className="work-grid"
          href="https://www.figma.com/proto/jJ3hpRQGCe2NXp9IZo8Huq?node-id=166-1631&t=jQfcrpEe4ycqd6hu-6"
        >
          <img alt="" src="https://i.ibb.co/SxzwsHM/mockup-two.png"></img>
          <div className="hover-text">
            <div className="text">
              I had worked on an e-commerce platform for Twilla, a premium
              clothing brand. The platform offered a seamless, refined shopping
              experience with high-quality images, detailed product
              descriptions, and personalized recommendations, catering to
              customers who value exclusivity and sophistication in fashion.
            </div>
          </div>
        </a>
        <a
          className="work-grid"
          href="https://www.figma.com/design/aAS13c3b8b823LNtf1o6nX?node-id="
        >
          <img alt="" src="https://i.ibb.co/343x7zy/mockup-three.png"></img>
          <div className="hover-text">
            <div className="text">
              I had worked on revamping the website for CIEM, aiming to enhance
              user experience and streamline access to information for students,
              faculty, and prospective applicants. The redesign focused on
              modernizing the layout, improving navigation, and ensuring a
              mobile-friendly interface to better meet the needs of its
              audience.
            </div>
          </div>
        </a>
        <a
          className="work-grid"
          href="https://www.figma.com/design/8i2P6opRZEbezJImFLpEuD"
        >
          <img
            alt=""
            src="https://i.ibb.co/3MpV25Y/4b88af52-8528-4fc8-a189-a5756a5abfb4.png"
          ></img>
          <div className="hover-text">
            <div className="text">
              I worked on designing an educational report page tailored for
              children aged 6-16. The page was created to present academic
              progress in an engaging, age-appropriate way, using visuals,
              simplified language, and interactive elements to keep young users
              motivated and informed about their achievements.
            </div>
          </div>
        </a>
        <div className="work-grid">
          <img alt="" src="https://i.ibb.co/WzfkPSJ/Frame-13.png"></img>
          <div className="hover-text">
            <div className="text">
              The dark purple theme of the college fest website creates a sleek
              and sophisticated vibe, making it an attractive destination for
              students. The user experience is enhanced by the clear navigation
              and clean layout, allowing visitors to easily access information
              about events and performances. Overall, the website effectively
              captures the excitement and energy of the college fest, inviting
              students to get involved and make the most of the experience.
            </div>
          </div>
        </div>
        <div className="work-grid">
          <img alt="" src="https://i.ibb.co/txYbm1y/image-30-1.png"></img>
          <div className="hover-text">
            <div className="text">
              The quiz app has a simple and intuitive interface, making it easy
              for users to navigate and participate in quizzes. The app's
              visually appealing design adds to the overall user experience,
              making it enjoyable for users to challenge themselves and learn
              new things. Overall, the app's UX is well thought out and highly
              engaging, making it a great tool for education and entertainment.
            </div>
          </div>
        </div>
        <div className="work-grid">
          <img alt="" src="https://i.ibb.co/y6589CZ/Group-1962.png"></img>
          <div className="hover-text">
            <div className="text">
              The gym website offers a range of online courses to help users
              reach their fitness goals from the comfort of their own home. The
              user-friendly design makes it easy to browse and sign up for
              courses, with clear navigation and intuitive layout. The online
              courses feature high-quality videos and interactive elements,
              providing a dynamic and engaging learning experience for users.
            </div>
          </div>
        </div>
        <div className="work-grid">
          <img alt="" src="https://i.ibb.co/5vTqWR9/Frame-5-6.png"></img>
          <div className="hover-text">
            <div className="text">
              The book seller website is designed to be user-friendly and
              intuitive, with a clean layout and easy navigation. Users can
              easily browse through categories and search for specific titles,
              and the website also features recommendations and reviews to help
              users discover new books. Overall, the website aims to provide a
              seamless shopping experience for book lovers.
            </div>
          </div>
        </div>
        <div className="work-grid">
          <img alt="" src="https://i.ibb.co/c1fJZsQ/Frame-1-17.png"></img>
          <div className="hover-text">
            <div className="text">
              This developer's portfolio website is designed with the user in
              mind. It is intuitive, easy to navigate, and showcases their
              skills and experience in a visually appealing way. Whether you're
              looking for information about their services or want to see
              examples of their work, everything is just a few clicks away.
            </div>
          </div>
        </div>
        {/* <div className="work-grid">
          <img alt="" src="https://i.ibb.co/vDqSCW2/Frame-5-7.png"></img>
          <div className="hover-text">
            <div className="text">
              The crypto selling website has a sleek and modern design, with a
              user-friendly interface that makes it easy for users to navigate.
              The website has been carefully crafted to provide a seamless
              experience for users looking to buy and sell various
              cryptocurrencies. The design is visually appealing and intuitive,
              making it easy for users to find what they need quickly and
              efficiently.
            </div>
          </div>
        </div> */}
        <a
          className="work-grid"
          href="https://www.figma.com/proto/hmhsnbj0F3uNhGq2qOavrv?node-id=5-37"
        >
          <img alt="" src="https://i.ibb.co/NyssJjL/mockup-one.png"></img>
          <div className="hover-text">
            <div className="text">
              I had worked on a pill management app that had helped elderly
              users take their medications on time and track their pill intake.
              The app had provided reminders for each pill, making it easier for
              users to maintain their schedule and manage their health more
              independently.
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
export default Works;
