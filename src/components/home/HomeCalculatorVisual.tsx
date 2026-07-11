import { HOME_IMAGES } from '../../data/homeImages';
import HomeImage from './ui/HomeImage';

export default function HomeCalculatorVisual() {
  return (
    <div className="home-container pb-6 md:pb-8">
      <div className="home-calc-visual-banner">
        <HomeImage
          image={HOME_IMAGES.wamCalculator}
          alt="Student using the Monash WAM calculator with subject marks, credit points, and live results"
          wrapperClassName="home-calc-visual-banner-wrap"
          className="home-calc-visual-banner-image"
        />
      </div>
    </div>
  );
}
