const Footer = () => {
  const date = new Date();
  const Year = date.getFullYear();
  return (
    <section className="flex items-center justify-center font-bold text-[16px] capitalize cursor-pointer">
      <p>Copyright {Year} Reserved </p>
    </section>
  );
};

export default Footer;
