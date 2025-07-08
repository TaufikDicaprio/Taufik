import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PageNotFound() {
  return (
   <>
   <Navbar/>
   <div className="wrapper">
    <h3>Oopss...</h3>
    <p>Halaman yang anda tuju tidak ditemukan...</p>
    <p>Emangg itu apaaan?...</p>
   </div>
   <Footer/>
   </>
  )
}

export default PageNotFound