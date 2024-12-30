
import React, { useState } from 'react';

const CreateAssignment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border-2 border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-600 italic">
        Create Assignment
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md mb-6"
      >
        <h2 className="text-xl font-semibold mb-3">Assignment Details</h2>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter assignment title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            placeholder="Enter assignment description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment;
