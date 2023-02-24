import { TTabsProps } from './types';
import { TabContainer } from './style';

const Tabs = ({ notes, tuning }: TTabsProps) => {
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
      {tuning.map((note: string, index: number) => (
        <div style={{ display: 'flex' }} key={note}>
          {' '}
          {`${note} | -`}
          {renderTab(index)}
        </div>
      ))}
    </TabContainer>
  );
};

export { Tabs };
