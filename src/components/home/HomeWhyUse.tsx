import { Check, Shield, Zap } from 'lucide-react';
import CardIcon from './ui/CardIcon';
import HomeImage from './ui/HomeImage';
import { HOME_IMAGES } from '../../data/homeImages';

export default function HomeWhyUse() {
  const reasons = [
    { title: '100% Free Forever', desc: 'No paywalls or signups.', icon: Check },
    { title: 'Lightning Fast', desc: 'Instant calculations in your browser.', icon: Zap },
    { title: 'Private & Secure', desc: 'We do not save your data.', icon: Shield },
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="home-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="home-animate-in">
            <p className="home-eyebrow mb-3">Why Choose Us</p>
            <h2 className="home-h2 mb-6">Built for speed, accuracy, and ease of use.</h2>
            <p className="home-lead mb-10">
              My Calculator Hub is designed to be your one-stop destination for all daily calculations.
            </p>
            <div className="space-y-6">
              {reasons.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1">
                    <CardIcon icon={item.icon} className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="card-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pl-10 home-animate-in" style={{ animationDelay: '200ms' }}>
            <HomeImage
              image={HOME_IMAGES.wamCalculator}
              alt="My Calculator Hub tools"
              wrapperClassName="aspect-square lg:aspect-auto lg:h-[500px]"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
