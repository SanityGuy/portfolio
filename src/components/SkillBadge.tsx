import React, { useState } from 'react';

interface SkillBadgeProps {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = () => {
    switch (level) {
      case 'Expert':
        return 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light';
      case 'Advanced':
        return 'bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-light';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="relative inline-block">
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getLevelColor()} cursor-pointer transition-all duration-200 hover:scale-105`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {name}
      </span>
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg whitespace-nowrap z-10 animate-fadeIn">
          {level}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </div>
      )}
    </div>
  );
}