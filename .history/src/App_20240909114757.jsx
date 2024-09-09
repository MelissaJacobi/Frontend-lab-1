function App() {

  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-button"><span>&#129293;</span></button>
              <button className="icon-button"><span>&#128722;</span></button>
            </div>
          </div>

          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search"></input>
              <button type="buttone">Go</button>
            </form>
          </div>
        </header>
        <main>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg" alt="shoes"/>
            <p className="pr-name">Running Shoes</p>
            <p className="pr-price">$25</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Windbreaker_Jacket%2C_Hood_Outside.jpg" alt="jacket"/>
            <p className="pr-name">Jacket</p>
            <p className="pr-price">$25</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg" alt="Shirt"/>
            <p className="pr-name">Shirt</p>
            <p className="pr-price">$25</p>
          </div>
          
          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg" alt="Jeans"/>
            <p className="pr-name">Jeans</p>
            <p className="pr-price">$25</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/IPhone_7_Plus_Rose_Gold_128GB_05.jpg" alt="iphone"/>
            <p className="pr-name">Iphone</p>
            <p className="pr-price">$1000</p>
          </div>

        </main>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App
