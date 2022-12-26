import { useMemo, useState } from 'react';
import React, { ChangeEvent } from 'react';
function getAverage(numbers: number[]) {
  if (numbers.length === 0) {
    return 0;
  }
  let totalSum: number = numbers.reduce((allSum, currentNum) => {
    return allSum + currentNum;
  });

  return totalSum / numbers.length;
}

function Average() {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>('');

  const stringtoNum = (str: string) => {
    return parseInt(str);
  };

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const onInsert = (event: React.MouseEvent<HTMLButtonElement>) => {
    const changetoNum = stringtoNum(number);
    setList([...list, changetoNum]);
    setNumber('');
  };

  //list가 바뀌었을떄만 평균값을 다시 계산하겠다,그렇지 않으면 기존 값 그대로 씀
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onchange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <h1>평균값</h1>
        <div>{avg}</div>
      </div>
    </div>
  );
}
export default Average;
