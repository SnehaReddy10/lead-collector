import { useState } from 'react';
import CourseInterestChart from './CourseInterestChart';
import LeadSourceGraph from './LeadSourceGraph';

function Visualizations() {
  const [activeTab, setActiveTab] = useState<'courseInterest' | 'leadSource'>(
    'courseInterest'
  );

  return (
    <div className="flex flex-col items-center gap-10">
      {/* Tabs */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab('courseInterest')}
          className={`px-4 py-2 rounded ${
            activeTab === 'courseInterest'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Top Courses Insights
        </button>
        <button
          onClick={() => setActiveTab('leadSource')}
          className={`px-4 py-2 rounded ${
            activeTab === 'leadSource'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          User Traffic Insights
        </button>
      </div>

      <div className="w-full">
        {activeTab === 'courseInterest' && <CourseInterestChart />}
        {activeTab === 'leadSource' && <LeadSourceGraph />}
      </div>
    </div>
  );
}

export default Visualizations;
