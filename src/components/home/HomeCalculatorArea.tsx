import WAMCalculator from '../WAMCalculator';
import HomeCalculatorSearch from './HomeCalculatorSearch';
import HomeCalculatorVisual from './HomeCalculatorVisual';

export default function HomeCalculatorArea() {
  return (
    <div className="home-calculator-zone">
      <div className="home-container pb-2 pt-10 md:pt-12">
        <HomeCalculatorSearch />
      </div>
      <HomeCalculatorVisual />
      <WAMCalculator shellVariant="home" />
    </div>
  );
}
