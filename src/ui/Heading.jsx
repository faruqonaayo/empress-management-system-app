function Heading({ level, children, className }) {
  if (level === 1) {
    return (
      <h1 className={`font-montserrat text-4xl font-bold ${className}`}>
        {children}
      </h1>
    );
  } else if (level === 2) {
    return (
      <h2 className={`font-montserrat text-3xl font-bold ${className}`}>
        {children}
      </h2>
    );
  } else if (level === 3) {
    return (
      <h3 className={`font-montserrat text-2xl font-bold ${className}`}>
        {children}
      </h3>
    );
  } else if (level === 4) {
    return (
      <h4 className={`font-montserrat text-xl font-bold ${className}`}>
        {children}
      </h4>
    );
  } else if (level === 5) {
    return (
      <h5 className={`font-montserrat text-lg font-bold ${className}`}>
        {children}
      </h5>
    );
  } else {
    return (
      <h6 className={`k font-montserrat text-base font-bold ${className}`}>
        {children}
      </h6>
    );
  }
}

export default Heading;
