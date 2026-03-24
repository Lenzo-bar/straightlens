import './globals.css';
export const metadata = {
  title: 'StraightLens',
  description: 'Clear answers. Guided understanding. Practical direction for the common good.'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
