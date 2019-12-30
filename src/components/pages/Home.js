import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <section>
            <article>
              <header className="home-header">
                <h2>Welcome to Old Guy Bikes</h2>
                <h3>Since 1976</h3>
              </header>
              <p class="first">
                My name is Robert and I've been rebuilding and repairing bikes
                since 1976. Mountain bikes are my passion but my talents aren't
                limited to them. I'm currently located in the Dallas area where
                I've sold over 200 bikes to satisfied customers. I use custom,
                rare, robust mountain bike parts that last so you can enjoy a
                quality product. Many of my customers buy bikes for themselves
                and also as gifts. Take a look at bikes I've sold in the{" "}
                <Link className="text-link" to={"/archives"}>
                  archives
                </Link>{" "}
                tab.
              </p>
              <p>
                I do repairs and other services. I also sell cool, restored
                vintage mountains. I can make a mountain bike a one speed and a
                road bike a hybrid, but I specialize in mountain bikes. Please
                feel free to call me if you're interested in my services or
                bikes.
              </p>

              <aside class="sidebar">
                <h4>Questions?</h4>
                <p>
                  Please{" "}
                  <a class="link" href="">
                    contact
                  </a>{" "}
                  me if you have any questions or inquires about any of my bikes
                  for sale.
                </p>
              </aside>
            </article>
            <article>
              <header>
                <h2>Quality Over Quantity</h2>
              </header>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Vivamus laoreet lorem sed tellus. Integer
                porttitor, mi sed vestibulum accumsan, erat urna tincidunt
                velit, eget aliquet velit eros sit amet purus. Sed non sem in
                neque semper gravida. Ut luctus tellus non erat. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Etiam eu sem eu odio faucibus feugiat. Aenean turpis.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Quisque tristique purus sit amet mi.
                Nullam velit odio, congue vitae, adipiscing ut, vehicula vitae,
                elit. Fusce cursus, ligula in posuere imperdiet, eros tortor
                tempus enim, et rutrum ligula tellus ac elit.
              </p>
              <p class="special">
                Fusce sit amet erat. Maecenas eu ipsum in pede sodales
                hendrerit. Donec adipiscing. Ut porttitor. Fusce tincidunt lorem
                vel nisl. Ut mattis nisi sit amet nisi. Vestibulum nec tortor et
                erat sollicitudin bibendum.
              </p>
              <p>
                Morbi odio odio, varius in, fermentum vitae, mattis ac, massa.
                Sed venenatis semper libero. Suspendisse ut lorem. Mauris id
                quam. Phasellus massa. Mauris dapibus orci sed tellus semper
                interdum. Sed sit amet justo eu neque feugiat condimentum. Cras
                non odio non enim scelerisque sollicitudin. Nulla vitae quam sit
                amet nisi scelerisque hendrerit. Phasellus mattis venenatis
                ante. Suspendisse augue. Ut tempor ultricies dolor. Fusce sed
                mauris. Duis sollicitudin lacinia tellus. Sed condimentum, dui
                ut tristique viverra, nulla quam fringilla orci, eget tincidunt
                lectus ligula quis sapien. Aenean convallis auctor turpis. Fusce
                quis nibh. Suspendisse dictum. Sed commodo volutpat est. Mauris
                vel magna vel ligula sodales posuere. Proin eros. Duis nunc est,
                venenatis sit amet, tempus eget, rhoncus non, dui. Integer nec
                quam. Donec posuere diam at libero. Quisque vel ipsum id mi
                feugiat luctus. Donec tristique. Maecenas luctus pede eu ligula.
                Cras sollicitudin faucibus est. Sed venenatis quam non est.
                Praesent dui nunc, venenatis vel, auctor at, tempor sed, eros.
                Sed dignissim nibh quis tortor.
              </p>
            </article>
            <br />
            <article>
              <header>
                <h2>My Promise To You Since 1997</h2>
              </header>
              <p>
                Ut tempor ultricies dolor. Fusce sed mauris. Duis sollicitudin
                lacinia tellus. Sed condimentum, dui ut tristique viverra, nulla
                quam fringilla orci, eget tincidunt lectus ligula quis sapien.
                Aenean convallis auctor turpis. Fusce quis nibh. Suspendisse
                dictum. Sed commodo volutpat est. Mauris vel magna vel ligula
                sodales posuere. Proin eros. Duis nunc est, venenatis sit amet,
                tempus eget, rhoncus non, dui. Integer nec quam. Donec posuere
                diam at libero. Quisque vel ipsum id mi feugiat luctus. Donec
                tristique. Maecenas luctus pede eu ligula. Cras sollicitudin
                faucibus est. Sed venenatis quam non est. Praesent dui nunc,
                venenatis vel, auctor at, tempor sed, eros. Sed dignissim nibh
                quis tortor.
              </p>
              <p>
                Morbi odio odio, varius in, fermentum vitae, mattis ac, massa.
                Sed venenatis semper libero. Suspendisse ut lorem. Mauris id
                quam. Phasellus massa. Mauris dapibus orci sed tellus semper
                interdum. Sed sit amet justo eu neque feugiat condimentum. Cras
                non odio non enim scelerisque sollicitudin. Nulla vitae quam sit
                amet nisi scelerisque hendrerit. Phasellus mattis venenatis
                ante. Suspendisse augue.
              </p>
            </article>
          </section>
          <br />
        </div>
      </div>
    );
  }
}
export default Home;
