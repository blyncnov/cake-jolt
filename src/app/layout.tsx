// CSS Style Definitions
import "./globals.css";

export const metadata = {
  title: "Cake-jolt | A special birthday reminder app",
  description: "Cake-jolt | A special birthday reminder app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
