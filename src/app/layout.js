import './globals.css';

export const metadata = {
  title: 'Adhithya K | Backend Developer & Cloud Enthusiast',
  description: 'Backend Developer skilled in Java, Python, Spring Boot and AWS. Building scalable, cloud-integrated solutions.',
  keywords: ['Backend Developer', 'Java', 'Spring Boot', 'AWS', 'Cloud', 'Python'],
  authors: [{ name: 'Adhithya K' }],
  openGraph: {
    title: 'Adhithya K | Backend Developer',
    description: 'Building scalable, cloud-integrated solutions',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
