import type { Metadata } from "next";
import localFont from "next/font/local";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/nav-bar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const redHat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${redHat.className} antialiased`}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
