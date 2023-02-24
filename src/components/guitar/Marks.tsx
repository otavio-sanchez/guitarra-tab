import { Mark, MarksContainer, TwoMark } from './style';
import { IMarksProps } from './types';

const Marks = ({ x, y, strings }: IMarksProps) => {
  const marks = [3, 5, 7, 9, 15, 17, 19, 21];
  const twoMarks = [12, 24];

  return (
    <>
      {x === Math.round(strings / 2) && marks.includes(y) && <Mark />}
      {x === Math.round(strings / 2) && twoMarks.includes(y) && (
        <MarksContainer>
          <TwoMark /> <TwoMark />
        </MarksContainer>
      )}
    </>
  );
};

export { Marks };
