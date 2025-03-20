/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './node_modules/preline/preline.js'],
  theme: {
      colors: {
        'khaki': '#C7DDC5',
        'dark-khaki': '#47563d',
        'fluo-light-green': 'rgb(54 212 154)',
        'grey-900': '#1a202c',
        'bleu-marine': '#14213d',
        'jaune-orange-pale': '#fcaa21',
        'red-fluo': '#ef233c',
        'white': '#ffffff',
        'blanc-casse': '#fff2d5',
        'orange': '#ff6a00',
        'blue-100': '#ebf8ff',
        'blue-500': '#3b82f6',
        'blue-600': '#2563eb',
        'green-100': '#f0fff4',
        'green-500': '#22c55e',
        'red-100': '#fff5f5',
        'red-500': '#e53e3e',
        'purple-100': '#faf5ff',
        'purple-500': '#9333ea',

        'gray-100': '#f7fafc',
        'gray-200': '#eef1f6',
        'gray-300': '#e2e8f0',
        'gray-500': '#a0aec0',
        'gray-600': '#718096',
        'gray-700': '#4a5568',
        'gray-800': '#2d3748',
        'gray-900': '#1a202c',
        'gray-950': '#1a202c',
        'black': '#000000',
      },
    },
    plugins: [
      require('preline/plugin'),
    ],
}

