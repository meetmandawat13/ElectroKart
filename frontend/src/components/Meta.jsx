import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To ElectroKart',
  description: 'Get the best electronic gadgets at unbeatable prices',
  keywords: 'electronics, gadgets, buy electronics online, ElectroKart',
};

export default Meta;
