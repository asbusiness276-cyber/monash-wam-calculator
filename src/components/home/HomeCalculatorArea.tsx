import WAMCalculator from '../WAMCalculator';
import HomeCalculatorSearch from './HomeCalculatorSearch';

export default function HomeCalculatorArea() {
  return (
    <div className="home-calculator-zone">
      <div className="home-container home-calculator-zone-header">
        <HomeCalculatorSearch />
      </div>
      <WAMCalculator shellVariant="home" />
    </div>
  );
}
