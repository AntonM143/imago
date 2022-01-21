const dev = process.env.NODE_ENV !== 'production';
export const url_path = dev ? 'http://localhost:3000' : 'https://imago-snowy.vercel.app';