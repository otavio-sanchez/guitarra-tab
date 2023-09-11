import { TTabsProps } from './types';
import { TabContainer } from './style';

const Tabs = ({ notes, tuning, strings }: TTabsProps) => {
  const completeString = '---';

  const complete = (value: number) => {
    const count = value.toString().length;
    return `${value}${completeString.slice(0, completeString.length - count)}`;
  };

  const renderTab = (index: number) =>
    notes.map(({ x, y }) => {
      if (x === index) {
        return `${complete(y)}`;
      }

      return completeString;
    });

  return (
    <TabContainer>
      {tuning
        .filter((note: string, index: number) => index < strings)
        .map((note: string, index: number) => (
          <p style={{ display: 'flex' }} key={note}>
            {' '}
            {`${note.length > 1 ? note : `${note} `} | -`}
            {renderTab(index)}
          </p>
        ))}
    </TabContainer>
  );
};

export { Tabs };
