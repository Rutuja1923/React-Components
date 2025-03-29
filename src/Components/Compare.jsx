function Compare() {
  var x = 25,
    y = 30;
  return (
    <>
      <h2> Evaluating expression </h2>
      <h3>
        {x} {">"}
        {y} {":"} 
        {x > y ? " True" : " False"}
      </h3>
    </>
  );
}
export default Compare;
