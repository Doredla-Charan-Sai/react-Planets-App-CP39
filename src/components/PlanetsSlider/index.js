// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="bg-cont" data-testid="planets">
      <h1 className="main-head">PLANETS</h1>
      <div>
        <Slider>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} details={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetsSlider
