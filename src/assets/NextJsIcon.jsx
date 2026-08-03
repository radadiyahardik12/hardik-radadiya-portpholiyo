import React from 'react';

const NextJsIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="60" fill="#000000" stroke="#FFFFFF" strokeWidth="6"/>
    <path d="M40 40V88M88 40L48 92" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round"/>
    <path d="M88 40V88" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

export default NextJsIcon;
