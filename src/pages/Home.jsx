import { tourPackages } from '../data/index';
import { useCart } from '../store/useCart';

const Home = () => {


    const { addToCart } = useCart();


    const handleAddToCart = (tour) => {
        alert(`Tur savatga qushildi`)
        addToCart(tour)
    }

  return (
    <div>
      <h2>Tur paketlari - Admin</h2>

      <div className="packages">
        {tourPackages?.slice(0, 4).map((tour) => (
          <div className="card" key={tour.id}>
            <img src={tour.image} alt="Dubai"></img>
            <div class="content">
              <h3> {tour.title} </h3>
              <p>
                📍 {tour.country}, {tour.city}{" "}
              </p>
              <p>⏳ {tour.duration} </p>
              <div class="footer">
                <span>${tour.price} </span>
                <button onClick={() => handleAddToCart(tour)}>Savatga</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Shomuhammad Xudayberdiyev</h2>
      <h2>Usmonov Anvarbek</h2>
      <h2>jonibek ilxomov bu men</h2>
    </div>
  );
}

export default Home