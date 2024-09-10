import "@/app/ui/global.css";
import { inter, poppins, oxygen, montserrat } from "@/app/ui/fonts";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
