import logo from "../assets/logo/logo.svg";

function Hero() {
  return (
    <div className="header">
      <div className="container">
        <section className="header__content">
          <h1>Pawsitively Perfect: Where Every Pet&apos;s Dream Comes True!</h1>
          <p>
            Welcome to Paws n’ Play, the ultimate destination for pet lovers!
            Explore a world of tail-wagging joy and furry companionship with our
            wide range of products and services. From pampering essentials to
            playful toys, we&apos;re here to make every moment with your pet
            pawsitively perfect!
          </p>
          <a href="#" className="btn btn__primary">
            Shop Now
            <img className="logo__symbol" src={logo} alt="" />
          </a>
        </section>
      </div>
    </div>
  );
}

export default Hero;
