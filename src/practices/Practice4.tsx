export const Practice4 = () => {
  const calcTotallFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotallFee(1000);

  return (
    <div>
      <p>Practice: Setting file</p>
      <button onClick={onClickPractice}>Excecute Practice 4</button>
    </div>
  );
};
