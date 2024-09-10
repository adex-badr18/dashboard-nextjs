import { Inter, Poppins, Oxygen, Montserrat, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
});
export const oxygen = Oxygen({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
});
export const montserrat = Montserrat({ subsets: ["latin"] });
export const lusitana = Lusitana({
    weight: ["400", "700"],
    subsets: ["latin"],
});
