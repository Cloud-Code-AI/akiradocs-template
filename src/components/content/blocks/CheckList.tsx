import React from 'react';

interface CheckListProps {
  items: { text: string; checked: boolean }[];
  align?: 'left' | 'center' | 'right'; // Add align prop
}

export function CheckList({ items, align = 'left' }: CheckListProps) {
  const alignClass = align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : '';
  return (
    <ul className={`mb-6 py-1 ${alignClass}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center mb-1">
          <input
            type="checkbox"
            checked={item.checked}
            readOnly
            className="mr-2"
          />
          <span className={item.checked ? 'line-through text-gray-500' : ''}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
