
import './App.css'
import ProductInfo from './ProductInfo'
import ProductImage from './ProductImage'

function App() {
  return (
    <>
      <div className='main'> 
        <div className='card'>
          <ProductImage></ProductImage>
          <ProductInfo></ProductInfo>
        </div> 
      </div>
      <div className='attribution'>
              <p>Challange by <a href="https://www.frontendmentor.io/challenges">Frontend Mentor</a>, Coded by Ntokozo Nkosi </p>
      </div>
    </>   
  )
}

export default App
