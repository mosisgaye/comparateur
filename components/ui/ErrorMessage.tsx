// File: components/ui/ErrorMessage.tsx
import React from 'react';

// Définir le type pour les props
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="text-red-600 text-center">
        <p className="text-lg font-semibold">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
