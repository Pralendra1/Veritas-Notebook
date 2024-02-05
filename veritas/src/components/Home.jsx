function Home() {
  return (
    <div className="home">
      <input
        type="text"
        className="textTitle"
        placeholder="Construct a Title"
      />
      <textarea
        className="textDesc"
        placeholder="Enter the Description."
      ></textarea>
    </div>
  );
}

export default Home;
