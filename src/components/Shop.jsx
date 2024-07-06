import logo from "../assets/logo/logo_dark.svg";
import searchIcon from "../assets/images/search_icon.svg";
import productImg1 from "../assets/images/product_img/Product Card 1.png";
import productImg2 from "../assets/images/product_img/Product Card 2.png";
import productImg3 from "../assets/images/product_img/Product Card 3.png";

function Shop() {
  return (
    <section id="shop" className="shop">
      <div className="container">
        <h1 className="title">
          <img src={logo} alt="dogo" />
          Shop
        </h1>
        <hr />
        <div className="border">
          <div className="shop__header">
            <h1>Featured Products</h1>
            <div className="search__wrapper">
              <img src={searchIcon} alt="" className="search__icon" />
              <input className="search__bar" type="text" placeholder="Search" />
            </div>
          </div>
          <div className="btn__list">
            <a href="#" className="btn btn__secondary active">
              Random
            </a>
            <a href="#" className="btn btn__secondary">
              Cat
            </a>
            <a href="#" className="btn btn__secondary">
              Dog
            </a>
            <a href="#" className="btn btn__secondary">
              Fish
            </a>
            <a href="#" className="btn btn__secondary">
              Birds
            </a>
          </div>
          <div className="shop__list-products">
            <img src={productImg1} alt="" className="product" />
            <img src={productImg2} alt="" className="product" />
            <img src={productImg3} alt="" className="product" />
          </div>
          <div>
            <h3>View More &gt;&gt;&gt;</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
