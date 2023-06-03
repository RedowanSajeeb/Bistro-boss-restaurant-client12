import { Helmet, HelmetProvider } from "react-helmet-async";

const Helmett = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Helmett;