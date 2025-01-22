import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [deletingTasks, setDeletingTasks] = useState(new Set()); // Add this new state
  

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };


  const deleteTask = (taskId) => {
    setDeletingTasks(prev => new Set([...prev, taskId]));
    setTimeout(() => {
      setTasks(tasks.filter(task => task.id !== taskId));
      setDeletingTasks(prev => {
        const newSet = new Set(prev);
        newSet.delete(taskId);
        return newSet;
      });
    }, 300); // Match this with the CSS transition duration
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 min-w-full pt-36">
      <div className="max-w-2xl mx-auto  rounded-lg ">
        {/* <h1 className="text-2xl font-bold text-navy-900 mb-6">Welcome Israel!</h1> */}
        
        <div className=" font-Jersey25 flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What's on your ToDo List..."
            className="text-black flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-[#152E4D] text-white px-8 py-2 rounded hover:bg-[#0f2137] transition-colors"
            >
            Add
          </button>
        </div>

        <ul className="space-y-3">
  {tasks.map(task => (
    <li 
      key={task.id} 
      className={`flex items-center gap-3 transform transition-all duration-300 ${
        deletingTasks.has(task.id) ? 'translate-x-full opacity-0' : ''
      }`}
    >
      <div className="flex-1 flex items-center gap-3 bg-gray-50 p-3 rounded">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="w-5 h-5 text-blue-600"
        />
        <span className={`font-Jersey25 text-black flex-1 font-bold ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="font-Jersey25 bg-[#152E4D] text-white px-8 py-2 rounded hover:bg-[#0f2137] transition-colors"
      >
        Delete
      </button>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
};

export default TodoList;