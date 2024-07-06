import logo from "../assets/logo/logo_dark.svg";
import img1 from "../assets/images/services/image 1.png";
import img2 from "../assets/images/services/image 2.png";
import img3 from "../assets/images/services/image 3.png";
import img4 from "../assets/images/services/image 4.png";
import img5 from "../assets/images/services/image 5.png";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h1 className="title">
          <img src={logo} alt="dogo" />
          Services
        </h1>
        <hr />
        <div className="border">
          <div className="services__list">
            <div className="service s1">
              <img src={img1} alt="Grooming" className="service__image" />
              <h2 className="service__title">Grooming</h2>
            </div>
            <div className="service s2">
              <img src={img2} alt="Boarding" className="service__image" />
              <h2 className="service__title">Boarding</h2>
            </div>
            <div className="service s3">
              <img src={img3} alt="Adoption" className="service__image" />
              <h2 className="service__title">Adoption</h2>
            </div>
            <div className="service s4">
              <img src={img4} alt="Veterinary" className="service__image" />
              <h2 className="service__title">Veterinary</h2>
            </div>
            <div className="service s5">
              <img src={img5} alt="Training" className="service__image" />
              <h2 className="service__title">Training</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
