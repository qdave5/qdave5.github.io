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
      <main>{children}</main>
      <PageFooter />
    </>
  );
}
