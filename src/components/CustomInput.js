import React from 'react';

const CustomInput = ({ label, errorMessage, icon, className, ...props }) => {
  const inputClasses = `mt-1 p-2 pl-${icon ? '10' : '2'} border-transparent rounded-md w-full ${
    errorMessage ? 'border-red-500' : ''
  } ${className || ''}`;

  return (
    <div className="mb-4 relative ">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex items-center">
        {icon && (
          <div className="absolute bottom-0 inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input className={inputClasses} {...props} />
      </div>
      {errorMessage && (
        <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default CustomInput;
