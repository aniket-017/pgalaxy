import React, { useEffect } from 'react';
import "./ProjectDetails.css"

const ProjectDetails = () => {
  useEffect(() => {
    const slider = document.querySelector('.slider');

    function activate(e) {
      const items = document.querySelectorAll('.item');
      e.target.matches('.next') && slider.append(items[0])
      e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener('click', activate, false);

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener('click', activate, false);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <main>
      <ul className='slider'>
        <li className='item' style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')" }}>
            <div className='content'>
              <h2 className='title'>"Lossless Youths"</h2>
              <p className='description'> Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                praesentium nisi. Id laboriosam ipsam enim. </p>
              <button>Read More</button>
            </div>
          </li>
          <li className='item' style={{ backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')" }}>
            <div className='content'>
              <h2 className='title'>"Estrange Bond"</h2>
              <p className='description'> Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                praesentium nisi. Id laboriosam ipsam enim. </p>
              <button>Read More</button>
            </div>
          </li>

      </ul>
      <nav className='nav'>
        <ion-icon className='btn prev' name="arrow-back-outline"></ion-icon>
        <ion-icon className='btn next' name="arrow-forward-outline"></ion-icon>
      </nav>
    </main>
  );
}

export default ProjectDetails;
