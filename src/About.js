import React from "react";
import './App.css'; // Assuming your CSS file is here

const About = () => (
    <section id="about" className="py-5" class="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-md-6">
          <p>
            Hello! I'm Maryann Ichaura, a passionate Virtual Assistant with a
            fresh perspective and dedication to helping businesses and
            individuals manage their daily tasks efficiently.
          </p>
          <p>
            I specialize in managing emails, calendars, conducting internet
            research, data entry, scheduling, creating slides, and project
            management. With a strong foundation in tools like Google Workspace,
            Calendly, Trello, and Asana, I help keep you organized and
            efficient.
          </p>
          <p>
            Clients appreciate my sharp eye for detail and unwavering commitment
            to delivering top-quality work. My goal as your Virtual Assistant is
            to take on the tasks that consume your time, allowing you to focus
            on what matters most—whether that's growing your business or
            enjoying more personal time.
          </p>
          <p>
            When I'm not busy helping clients, you can find me enjoying web
            design projects, reading, or perfecting my proofreading skills. I'm
            excited to embark on this journey as a Virtual Assistant and look
            forward to helping you achieve your goals with passion and
            precision.
          </p>
          <p>
            If you're looking for a reliable, detail-oriented Virtual Assistant,
            I'd love to connect! Let's chat about how I can support you in
            achieving your goals.
          </p>
        </div>

        {/* Image Column */}
        <div className="col-md-6 text-center">
          <img
            src="/Assets/Maryann.jpg"
            alt="Maryann Ichaura"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
    </section>
  );
  
  export default About;