import WAMCalculator from '../WAMCalculator';
import HomeCalculatorSearch from './HomeCalculatorSearch';

export default function HomeCalculatorArea() {
  return (
    <div className="home-calculator-zone">
      <div className="home-container pb-2 pt-10 md:pt-12">
        <HomeCalculatorSearch />
      </div>
      <WAMCalculator shellVariant="home" />
    </div>
  );
}
