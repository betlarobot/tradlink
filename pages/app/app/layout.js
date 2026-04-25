import "../styles/globals.css";

export const metadata = {
  title: "TradLink Network"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
