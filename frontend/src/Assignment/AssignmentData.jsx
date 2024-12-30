

const assignments = [
  {
    title: "Todo app",
    batchId: "SMIT-BATCH-11-TTS-5-7",
    postedDate: "Thursday, May 23"
  },
  {
    title: "Create Image Gallery Like Unsplash",
    batchId: "SMIT-BATCH-11-TTS-5-7", 
    postedDate: "Thursday, Aug 22"
  },
  {
    title: "CREATE TODO APP USING USE STATE",
    batchId: "SMIT-BATCH-11-TTS-5-7",
    postedDate: "Saturday, Aug 24"
  },
  {
    title: "Dynamic Routing Using Dummy Json API",
    batchId: "SMIT-BATCH-11-TTS-5-7",
    postedDate: "Wednesday, Sep 4"
  }
]

export default function AssignmentData() {
  
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="flex justify-center space-x-4 p-4">
      <button className="px-6 py-2  bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700  focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-75 transition duration-200 ease-in-out">
        Assignments
      </button>
      <button  className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none  focus:ring-black-400 focus:ring-opacity-75 transition duration-200 ease-in-out">
        Create Assignment
      </button>
    </div>
      {assignments.map((assignment, index) => (
        <div key={index} className="bg-white p-4 border-2 border-gray-300 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gray-100 rounded">
              <svg
                className="w-6 h-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">{assignment.title}</h3>
              <p className="text-sm text-gray-600">{assignment.batchId}</p>
              <p className="text-sm text-gray-500 mt-1">Posted {assignment.postedDate}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


