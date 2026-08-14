import { Calculator, CheckCircle, Search } from 'lucide-react';
import CardIcon from './ui/CardIcon';

export default function HomeHowItWorks() {
  return (
    <div className="home-bg-subtle py-16">
      <div className="home-container">
        <div className="text-center max-w-2xl mx-auto mb-12 home-animate-in">
          <p className="home-eyebrow text-center mb-3">Simple & Fast</p>
          <h2 className="home-h2">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: 'Find a Tool',
              desc: 'Search our hub of 100+ calculators for your specific need.',
            },
            {
              icon: Calculator,
              title: 'Enter Your Values',
              desc: 'Input your data into our easy-to-use forms.',
            },
            {
              icon: CheckCircle,
              title: 'Get Instant Results',
              desc: 'See accurate, real-time results instantly without any signup.',
            },
          ].map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center relative home-animate-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-bold flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-sm">
                  {idx + 1}
                </div>
                <CardIcon icon={Icon} className="w-12 h-12 mx-auto mb-5" />
                <h3 className="card-title mb-3">{step.title}</h3>
                <p className="card-body">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
