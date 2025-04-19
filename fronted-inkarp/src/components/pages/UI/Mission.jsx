function Mission() {
    return (
      <div className="flex items-center justify-center m-h-screen bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100">
        <div className="p-6 w-[50%] bg-white rounded-lg shadow-xl transform transition-all hover:scale-105">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 transition-opacity duration-500 hover:opacity-80">
            Our Mission
          </h1>
          <div className="text-lg text-center text-gray-600 transition-opacity duration-500 hover:opacity-80">
            <p>To inspire and make a positive impact on our community with innovation and empathy.</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-xl transform transition-all hover:scale-105">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 transition-opacity duration-500 hover:opacity-80">
            Our Vision
          </h1>
          <div className="text-lg text-center text-gray-600 transition-opacity duration-500 hover:opacity-80">
            <p>To inspire and make a positive impact on our community with innovation and empathy.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Mission;