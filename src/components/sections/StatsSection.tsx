
const StatsSection = () => {
  const stats = [
    { number: '50+', label: 'Premium Properties' },
    { number: '98%', label: 'Guest Satisfaction' },
    { number: '10K+', label: 'Happy Guests' },
    { number: '4.9', label: 'Average Rating' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-airbnb-gray mb-2">
                {stat.number}
              </div>
              <div className="text-airbnb-gray-light font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
