
import { portofolioList } from '../data/DataPortofolio'
import {Link} from 'react-router-dom'
import '../styles/Portofolio.css'



function Portofolio() {
  return (
    <section id="portofolio">
      <div className="wrapper">
        <h3>Portofolio</h3>
        <div className="grid">
          {
            portofolioList.map((item) => {
              return (
                <div className="item" key={item.id}> {/* Tambahkan key untuk setiap item */}
                  <Link to={`/portofolio/${item.id}`}><img src={item.image} alt={item.title} /></Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Portofolio; 
