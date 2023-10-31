import logoCoffeDelivery from '../../assets/logo.png'
import heroCoffe from '../../assets/coffe-hero.png'

import { MapPin, ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { HeaderContainer, HeroContainer, HeroContent } from './styles'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <img src={logoCoffeDelivery} alt="" />
        <div className="actions">
          <button type="button" className="location">
            <MapPin size={24} />
            <span>Maceió, AL</span>
          </button>
          <button type="button" className="cart">
            <ShoppingCart size={24} />
          </button>
        </div>
      </HeaderContainer>

      <HeroContainer>
        <HeroContent>
          <div className="title">
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>

          <div className="items">
            <div className="item">
              <div className="icon">
                <ShoppingCart size={16} className="shopping-cart" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="item">
              <div className="icon">
                <Package size={16} className="package" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="item">
              <div className="icon">
                <Timer size={16} className="timer" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="item">
              <div className="icon">
                <Coffee size={16} className="coffee" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </HeroContent>

        <div>
          <img src={heroCoffe} alt="" />
        </div>
      </HeroContainer>
    </>
  )
}
