import type { Config } from 'tailwindcss';


const config: Config = {
content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
theme: {
extend: {
colors: {
brand: {
50: '#fffaf0',
100: '#fff3e6',
500: '#f7c600',
700: '#f0b000'
}
},
fontFamily: {
sans: ['Pretendard', 'ui-sans-serif', 'system-ui']
},
borderRadius: {
xl: '1rem'
}
}
},
plugins: []
};


export default config;