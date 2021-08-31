export const Practice2 = () => {
  const getTotallFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    console.log(getTotallFee(1000));
  };

  return (
    <div>
      <p>Practice: type return value</p>
      <button onClick={onClickPractice}>Excecute Practice 2</button>
    </div>
  );
};
