"use client";

// CSS Style Definitions
import "./globals.css";
import "./preview.scss";

// Redux
import { Provider } from "react-redux";
import store from "../store/store";

// export const metadata = {
//   title: "Cake-jolt | A special birthday reminder app",
//   description: "Cake-jolt | A special birthday reminder app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <title>Cake-jolt | A special birthday reminder app</title>
        <body suppressHydrationWarning={true}>{children}</body>
      </html>
    </Provider>
  );
}
