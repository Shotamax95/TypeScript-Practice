export const Practice1 = () => {
  const calcTotallFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotallFee(1000);

  return (
    <div>
      <p>Practice: Argument type specification</p>
      <button onClick={onClickPractice}>Excecute Practice 1</button>
    </div>
  );
};
