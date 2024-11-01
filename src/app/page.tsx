import Image from "next/image";

import Card from "@/app/components/recent-post-card";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="continer">
          <div className="main">
            <div className="text-continer">
              <h1 className="main-text">Hi, i am John,
                creative Technologist</h1>
              <p className="main-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.</p>

              <button className="resume-download">Download Resume</button>
            </div>
            <div>
              <img src="./image.png" alt="image" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>



      <div className="recent-post">
        <div className="continer">

          <div className="main">

            <div className="heading">
              <h3>Recent Post</h3>
              <button className="view-all-button"> View All</button>
            </div>

            <div className="card-parent">

              <Card />
              <Card />

            </div>

          </div>






        </div>
      </div>

      <div className="feature-section">
        <div className="continer">
          <div className="main">

            <div className="main-heading">
              <h3>Featured Works</h3>
            </div>

                <div className="card-parents"></div>

                  <div className="card">
              <Image src="/image 1.png" width={246} height={180} alt="Picture"></Image>

              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                    <p>Dashboard</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  Velit officia consequat duis enim velit mollit. 
                  Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
                  </div>

                  <div className="card">
              <Image src="/image2.png" width={246} height={180} alt="Picture"></Image>

              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                    <p>Dashboard</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  Velit officia consequat duis enim velit mollit. 
                  Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
                </div>

                <div className="card">
              <Image src="/image3.png" width={246} height={180} alt="Picture"></Image>

              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                    <p>Dashboard</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  Velit officia consequat duis enim velit mollit. 
                  Exercitation veniam consequat sunt nostrud amet.</p>
              </div> 
            
              </div>

              </div>

        </div>
      </div>


    </>


  );
}
