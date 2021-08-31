export const Practice3 = () => {
  const getTotallFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = getTotallFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>Practice: Variable type specification</p>
      <button onClick={onClickPractice}>Excecute Practice 3</button>
    </div>
  );
};
