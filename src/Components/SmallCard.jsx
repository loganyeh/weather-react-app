import colors from "../assets/colors.js";

function SmallCard({title, value}) {
  return (
    <>
      <div
        className="h-full w-64 rounded-3xl shadow-2xl"
        style={{
          backgroundColor: colors.neutral800,
          border: `2px solid ${colors.neutral600}`,
        }}
      >
        <h3 className="flex items-center pl-6 h-1/2 w-full text-lg rounded-t-3xl">
          {title}
        </h3>
        <h3 className="flex items-center pl-6 h-1/2 w-full text-3xl rounded-b-3xl">
          {value}
        </h3>
      </div>
    </>
  );
}

export default SmallCard;
