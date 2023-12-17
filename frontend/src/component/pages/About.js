import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="aboutbody">
      <header class="header">
        <img
          src="https://res.cloudinary.com/decpgk49e/image/upload/v1560500934/erakomp/about-v2/header_hzpphq.png"
          alt="header"
          class="img-fluid"
        />
      </header>

      <div class="container">
        <div class="row mt-0">
          <div id="intro" class="col-sm-12 row spacer-b">
            <div class="col-sm-6 d-flex flex-column justify-content-center">
              <h1 class="progheading">Progressive Galaxy</h1>
              <p class="welhead">Welcome to Progressive Galaxy</p>
              <p className="parag">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Progressive Civil Construction Company is a leading civil construction and infrastructure development
                company based in India. For 40 years Progressive Civil Construction Company has been delivering
                effective and high quality project solutions to our clients.
              </p>
              <p className="parag">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Our versatile capabilities include constructing multistoried buildings, industrial structures, factory
                buildings, residential and commercial complexes, bridges and flyovers of any size and scale. Our
                dedication towards providing high quality construction, which is on time and within budget, has given us
                the reputation as one of the most highly reliable and dependable Civil Engineering Construction Company
                in the entire western India region. Our team comprises of highly skilled engineers with vast experience
                in a various domains and has handled projects at different locations for both private and government
                organizations. Our clients include leading multinational companies and various government departments.
              </p>
            </div>
            <div class="col-sm-6 order-xs-1">
              <img
                src="https://res.cloudinary.com/decpgk49e/image/upload/v1560476748/erakomp/about-v2/PIC_1_scd7dt.png"
                alt="intro"
                class="img-fluid"
              />
            </div>
          </div>
          <div id="vision-mission" class="col-sm-12 row spacer-b">
            <div class="col-sm-6">
              <img
                src="https://res.cloudinary.com/decpgk49e/image/upload/v1560476743/erakomp/about-v2/PIC_2_xcvipj.png"
                alt="our history"
                class="img-fluid"
              />
            </div>
            <div class="col-sm-6 d-flex flex-column justify-content-center">
              <h1 class="progheading">Vision</h1>
              <p className="parag">
                To continuously build an organization of efficient & effective performers who will take on ever
                increasing challenges
              </p>
            </div>
          </div>
          <div id="vision-mision" class="col-sm-12 row spacer-b">
            <div class="col-sm-6  d-flex flex-column justify-content-center">
              <h1 class="progheading">Mission</h1>
              <p className="parag">
                We are a team of dedicated professionals whose main objective is to grow by tapping various
                opportunities in India and abroad.
              </p>
            </div>
            <div class="col-sm-6">
              <img
                src="https://res.cloudinary.com/decpgk49e/image/upload/v1560476743/erakomp/about-v2/PIC_3_dppugf.png"
                alt="vision mision"
                class="img-fluid"
              />
            </div>
          </div>
          <div id="partners" class="col-sm-12 text-center d-flex flex-column justify-content-center spacer-b">
            <p class="partner--text">
              <h3 className="progheading">Progressive believes in the following:</h3>
              <ul>
                <li>
                  We shall provide maximum value to our customers by delivering projects / services on time and with the
                  best quality standards.
                </li>
                <li>
                  We shall endeavor to achieve excellence on all work fronts – be it project quality, project time,
                  project safety, project reporting, etc, thereby challenging our professional competency and developing
                  a high quality brand value.
                </li>
                <li>
                  We believe that change is inevitable and shall adapt to all changes whether it is in technology, human
                  resources or any other allied field such that the change works for us and moves us further towards our
                  goals.
                </li>
                <li>
                  We shall develop an environment of trust and openness – an environment where the individual is
                  respected for his ideas, hard-work, sincerity and efforts for development of the organization.
                </li>
                <li>
                  We shall always strive for the well being of our people, subcontractors and our suppliers. We shall
                  also strive for higher returns to our investors and also work for the betterment of society at large.
                </li>
              </ul>
            </p>
            {/* <img src="https://res.cloudinary.com/decpgk49e/image/upload/v1560476745/erakomp/about-v2/PIC_4_i6ezd0.png" alt="partners" class="img-fluid">  */}
          </div>
          <div id="history" class="text-center col-sm-12">
            <img
              src="https://res.cloudinary.com/decpgk49e/image/upload/v1560476743/erakomp/about-v2/PIC_5_kpa8ef.png"
              alt="partners"
              class="img-fluid"
            />
            <p className="progheading" >We have grown and developed since 1988</p>
          </div>
        </div>
      </div>

      <footer class="footer">
  <div class="footer-column">
    <p>
      <h3>PROGRESSIVE CIVIL CONSTRUCTION COMPANY PRIVATE LIMITED.</h3>
    <b>Telefax</b> : + 91- (022) 27882021 / 22
      <br /><b>Email</b> :- info@progressivegalaxy.com
      <br /> <b>For any Marketing related queries</b>: marketing@progressivegalaxy.com
      <br /> <b>For any Purchase related queries</b>: purchase@progressivegalaxy.com
      <br /><b>For any Recruitment related queries</b> : hr@progressivegalaxy.com
    </p>
  </div>
  <div class="footer-column">
    <p>
      <h2>Head Office:</h2>
       428, Vardhaman Market,
       Plot No. 75, Sector-17,
      <br /> Opp. Andhra Bank,
      <br /> Vashi, Navi Mumbai,
      <br /> Maharashtra. India.
      <br /><b>Pin</b>  - 400703.
    </p>
  </div>
</footer>

    </div>
  );
};

export default About;
