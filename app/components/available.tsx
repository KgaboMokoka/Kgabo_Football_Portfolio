function Available() {
  return (
    <>
      <div className="flex justify-center px-6 md:justify-start md:px-16">
        <div className="flex border border-light-green rounded-4xl bg-dark-green w-64 h-14 justify-center items-center">
          <span className="smallCircle border border-light-green bg-light-green rounded-full w-2 h-2 mx-5"></span>
          <p className="font-archivo">Available for transfer</p>
        </div>
      </div>
    </>
  );
}

export default Available;
