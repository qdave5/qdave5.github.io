import PageFooter from "./footer";
import Navbar from "./navbar";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="items-center justify-items-center min-h-screen p-8 pt-32 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {children}
      </div>
      <PageFooter />
    </>
  );
}
