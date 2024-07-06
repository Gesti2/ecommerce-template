import logo from "../assets/logo/logo_dark.svg";
import videoImg from "../assets/images/video image.png";

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <h1 className="title">
          <img src={logo} alt="dogo" />
          Blog
        </h1>
        <hr />
        <div className="blog__content">
          <div className="blog__content__text">
            <h1 className="blog__title">Milestone: 20,000 Pets Treated</h1>
            <hr />
            <p className="p1">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit
              tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat. Eget quis mi enim,
              leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat
              lectus velit, sed auctor. Porttitor fames arcu quis fusce augue
              enim. Quis at habitant diam at. Suscipit tristique risus, at
              donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
              sodales id est ac volutpat.
            </p>
            <h3>Renewed target</h3>
            <p className="p2">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis
              felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
              dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
              ac.
            </p>
            <a href="#" className="btn btn__secondary">
              Read more
            </a>
          </div>
          <div className="blog__content__video">
            <img src={videoImg} alt="video" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
