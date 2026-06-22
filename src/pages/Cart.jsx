
import { useCart } from '../store/useCart'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { tours, deleteFromCart } = useCart();
    const navigate = useNavigate()


    const handleDeleteTour = (id) => {
        alert("Tur savatdan uchirildi")
        deleteFromCart(id)
    }
  return (
    <div>
      <h2>Savatingzidagi tur paketlari - {tours?.length} </h2>

      <button onClick={() => navigate("/")}> Turlar haqida </button>

      <div className="packages">
        {tours?.map((tour) => (
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
                <button onClick={() => handleDeleteTour(tour.id)}>
                  Savatdan olib tashlash
                </button>
              </div>
            </div>
          </div>
        ))}
          </div>
          
          {/* reduce  */}

          <div>
              <div className="result">
                  
              </div>
        <form action="">
          <input type="text" placeholder="name" />
                  <input type="tel" placeholder="phone" />
                  <button>Yuborish</button>
        </form>
      </div>
    </div>
  );
}

export default Cart