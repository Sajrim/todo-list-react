const Buttons = ({ tasks, hideDone }) => {
  return (
    <div>
      {tasks.length > 0 && (
        <>
          <button className="section__button">
            {hideDone.hideDone ? "Pokaż" : "Ukryj"} ukończone{" "}
          </button>
          <button
            className="section__button"
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </button>
        </>
      )}
    </div>
  );
};

export default Buttons;
