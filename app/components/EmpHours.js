"use client";
const EmpHours = () => {
    // This could be a function to handle Clock-In actions
    const handleClockIn = () => {
      console.log('Clock-In clicked');
      // Implementation for clocking in...
    };
  
    // This could be a function to handle Clock-Out actions
    const handleClockOut = () => {
      console.log('Clock-Out clicked');
      // Implementation for clocking out...
    };
  
    return (
      <div className="flex flex-col items-center p-4">
        <div className="flex justify-between w-full mb-4">
          <button
            onClick={handleClockIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          >
            Clock-In
          </button>
          <button
            onClick={handleClockOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Clock-Out
          </button>
        </div>
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Day</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Hours Worked</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <tr key={day}>
                <td className="text-left py-3 px-4">{day}</td>
                <td className="text-left py-3 px-4">{'--:--'}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default EmpHours;
  