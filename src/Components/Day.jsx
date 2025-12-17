
function Day({ day, selectedDay, setSelectedDay }) {
  const isBold = selectedDay === day;

  function handleClick(){
    setSelectedDay(day);
  }

  return (
    <>
      <h3 onClick={handleClick} className={`h-10 w-48 flex justify-start items-center pl-4 active:bg-gray-400 hover:bg-gray-500 hover:border-1 hover:border-white rounded-lg cursor-pointer
        ${isBold ? `bg-gray-500` : `bg-transparent`}
      `}>
        {day}
      </h3>
    </>
  );
}

export default Day;
