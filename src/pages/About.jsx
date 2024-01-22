const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quo
        minus pariatur praesentium optio sequi molestiae maxime quidem dolor
        expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quaerat totam fuga neque officia accusamus consequatur id placeat
        impedit veniam cum!
      </p>
    </>
  );
};
export default About;
