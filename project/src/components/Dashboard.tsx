import React, { useState } from 'react';

const Dashboard = () => {
  const [isExpandedLeft, setIsExpandedLeft] = useState(false);
  const [isExpandedRight, setIsExpandedRight] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Maternal Health Dashboard
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our interactive dashboard offers a comprehensive visual representation of maternal health achievements across diverse regions. The featured chart provides insights into the performance of each region concerning institutional deliveries compared to their assessed needs. It serves as a dynamic tool for assessing healthcare effectiveness, allowing users to quickly gauge the success of maternal health initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Image Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Distribution Analysis
              </h2>
              <div className="relative aspect-video mb-4">
                <img
                  src="https://res.cloudinary.com/backend-15/image/upload/v1740273366/x9ilwkbkdqpbupw7xsuq.png"
                  alt="Distribution Analysis"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => setIsExpandedLeft(!isExpandedLeft)}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                {isExpandedLeft ? 'View Less' : 'View Details'}
              </button>
              
              {isExpandedLeft && (
                <div className="mt-6">
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Insights</h3>
                    <ul className="list-disc pl-6 text-gray-600">
                      <li>Bubble Chart provides a visual representation of how well different regions have performed in achieving institutional deliveries compared to their assessed needs. 
The Bubble Chart presented in the example is visualizing maternal health data, particularly focusing on the achievement of institutional deliveries in different states or union territories during the period of April to June for the year 2019-20. Let's break down what the chart is showing:</li>
                      <li>X-axis (horizontal axis): This axis represents the assessed needs for maternal health in different states or union territories. Each point on the X-axis corresponds to a specific region, and the position along the axis indicates the magnitude of the assessed needs.</li>
                      <li>Y-axis (vertical axis):The Y-axis represents the actual achievement in terms of the number of institutional deliveries during the specified period (April to June) in the year 2019-20. Each point on the Y-axis corresponds to a specific region, and the position along the axis indicates the magnitude of the achieved institutional deliveries.</li>
                      <li>Bubble Size: The size of each bubble is determined by the percentage achievement of the assessed needs, calculated as % Achvt = (B/A) * 100. Larger bubbles indicate a higher percentage of achievement compared to the assessed needs, suggesting a better performance in delivering institutional healthcare.</li>
                      <li>Each bubble is color-coded based on the respective state or union territory it represents. Different colors distinguish between regions, making it easy to identify and compare data points for different states or union territories.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Image Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Performance Metrics
              </h2>
              <div className="relative aspect-video mb-4">
                <img
                  src="https://res.cloudinary.com/backend-15/image/upload/v1740273365/r0rz8mqmaahyizbbx8rg.png"
                  alt="Performance Metrics"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => setIsExpandedRight(!isExpandedRight)}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
              >
                {isExpandedRight ? 'View Less' : 'View Details'}
              </button>
              
              {isExpandedRight && (
                <div className="mt-6">
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Highlights</h3>
                    <ul className="list-disc pl-6 text-gray-600">
                      <li>visualize the proportion of institutional deliveries across different states/union territories (UTs) during the specified period (April to June 2019-20). Let's break down the components of the graph and its interpretation:</li>
                      <li>Slices of the Pie: Each slice of the pie represents a specific state or UT.</li>
                      <li>Size of Slices: size of each slice corresponds to the proportion of institutional deliveries achieved during April to June 2019-20 for the respective state or UT.</li>
                      <li>Hover Information: Hovering over a slice provides additional information, such as the name of the state/UT and the exact proportion of institutional deliveries.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;