import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div
        style={{
          minHeight : '100vh'
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}