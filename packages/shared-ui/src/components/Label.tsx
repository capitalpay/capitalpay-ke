import React from 'react'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ className = '', children, ...props }) => {
  const base = 'block text-sm font-medium text-gray-700'
  return (
    <label className={`${base} ${className}`} {...props}>
      {children}
    </label>
  )
}






