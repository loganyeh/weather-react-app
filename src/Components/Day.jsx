function Day({ day }) {
  return (
    <>
      <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg cursor-pointer">
        {day}
      </h3>
    </>
  );
}

export default Day;
