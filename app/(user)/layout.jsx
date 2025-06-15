import Authorization from "@/components/Authorization";
import "../globals.css";

export const metadata = {
    title: "Sauji Ko Calculator",
    description: "Sauji Ko Calculator is an easy-to-use Inventory Management System (IMS) software sdesigned for everyone.It's a packaged solution to help you manage your inventory, receipts, and barcodes — all in one place.",
};

export default async function UserLayout({ children }) {
    return (
        <>
            <Authorization />
            {children}
        </>
    );
}