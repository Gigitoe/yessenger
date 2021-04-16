import Card from './Card';

const Stats = () => {
  const cards = [
    {
      upperText: '25',
      lowerText: 'Yessenges sent today',
    },
    {
      upperText: '125',
      lowerText: 'Yessenges sent this week',
    },
    {
      upperText: '1231',
      lowerText: 'Yessenges sent total',
    },
    {
      upperText: '0 hr 5 min',
      lowerText: 'Active time today',
    },
    {
      upperText: '1 hr 11 min',
      lowerText: 'Active time this week',
    },
    {
      upperText: '124 hr 32 min',
      lowerText: 'Active time total',
    },
  ];

  return {
    <>
        {cards.map(card => <Card upperText={card.upperText} lowerText={card.lowerText} />)};
    </>;
  };
};

export default Stats;
