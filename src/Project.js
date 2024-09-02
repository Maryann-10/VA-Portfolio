import React from "react";

const Project = () => (
    <section id="project" className="py-5" class="project-section">
    <div className="container">
      <h2>Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <img src="/Assets/Calendar Management.png" alt="Project 1" className="img-fluid" />
          <h3>Calendar Management</h3>
          <ul>
            <li><p>Streamlined Scheduling: Efficiently manage and organize appointments, deadlines, and meetings to ensure timely project completion and avoid conflicts.</p></li>
            <li><p>Prioritization: Prioritize key tasks and adjust schedules dynamically to meet shifting project requirements and deadlines.</p></li>
            <li><p>Reminders and Integration: Set up reminders and integrate your calendar with other tools to maintain smooth and cohesive project workflows.</p></li>
          </ul>
        </div>
        <div className="col-md-4">
          <img src="/Assets/Email Management.png" alt="Project 2" className="img-fluid" />

          <h3>Email Management</h3>
          <ul>
            <li><p>Efficient Inbox Organization: Streamline and organize your email inbox to ensure important messages are prioritized and easily accessible.</p></li>
            <li><p>Timely Responses: Handle and respond to emails promptly, maintaining clear and effective communication.</p></li>
            <li><p>Spam and Filter Management: Manage spam and filters to reduce clutter and keep your inbox focused on essential messages.</p></li>
            <li><p>Follow-Up Tracking: Set up reminders and track follow-ups to ensure no important communication is overlooked.</p></li>
          </ul>
        </div>
        <div className="col-md-4">
          <img src="/Assets/Research.PNG" alt="Internet Research" className="img-fluid" />
          <h3>Internet Research</h3>
          <ul>
            <li><p>Conducted comprehensive research to compile key metrics on California's largest cities, focusing on population numbers, the extent of park areas, and overall city size.</p></li>
            <li><p>Utilized advanced spreadsheet tools to organize data effectively and created a visually engaging bar chart to illustrate the comparative analysis clearly. </p></li>
            <li><p>This project highlights proficiency in data collection from authoritative sources (as indicated by source links in the spreadsheet), analytical skills in processing large datasets, and competency in using graphical representations to summarize complex information succinctly.</p></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Project;
