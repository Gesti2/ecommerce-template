import logo from "../assets/logo/logo_dark.svg";
import imgGroup from "../assets/images/about us/group_image.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h1 className="title">
          <img src={logo} alt="dogo" />
          About Us
        </h1>
        <hr />
        <div className="border">
          <div className="about__content">
            <div className="about__content__text e1">
              <p className="about__paragraph">
                At Paws n&apos; Play, our journey began with a simple yet
                profound love for animals. Inspired by the unwavering
                companionship and joy they bring to our lives, we embarked on a
                mission to create a haven where pets and their owners alike
                could experience unparalleled happiness and care.
              </p>
              <br />
              <p className="paragraph">
                Driven by our passion for animal welfare, we hand-select each
                product and service with meticulous attention to quality and
                sustainability. From nutritious food and enriching toys to
                expert grooming and healthcare, every offering is carefully
                curated to meet the unique needs of our beloved furry friends.
              </p>
              <br />
              <p className="paragraph">
                But our commitment doesn&apos;t end there. We&apos;re dedicated
                to fostering a community that celebrates the bond between pets
                and their human companions. Through educational resources,
                compassionate support, and memorable experiences, we strive to
                empower pet owners to provide the best possible care for their
                furry family members.
              </p>
              <br />
            </div>
            <div className="about__content__text e2">
              <p className="paragraph">
                At Paws n&apos; Play, customer satisfaction isn&apos;t just a
                goal – it&apos;s our guiding principle. We go above and beyond
                to ensure every interaction leaves tails wagging and hearts
                smiling. From personalized recommendations to attentive service,
                we&apos;re here to make your journey with your pet as joyful and
                fulfilling as possible.
              </p>
              <br />
              <p className="paragraph">
                Join us in our mission to create a world where every pet is
                cherished, every need is met, and every tail wags with
                happiness. Welcome to Paws n&apos; Play, where pets are family,
                and love knows no bounds.
              </p>
            </div>

            <img src={imgGroup} alt="" className="about__content__images e3" />
            {/* <div className="e4"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
