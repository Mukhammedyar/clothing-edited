import React from 'react';

interface NotificationProps {
  messages: string;
  description: string;
  onClose: () => void;
  visible: boolean;
}

const Notification: React.FC<NotificationProps> = ({ messages, description, onClose, visible }) => {
  return (
    <div className={` ${visible ? "flex" : "hidden"} z-10  max-w-sm w-full absolute top-10 right-10 bg-white shadow-lg rounded-2xl pointer-events-auto ring-1 ring-black ring-opacity-5`}>
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{messages}</p>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={onClose}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-indigo-500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Notification;
