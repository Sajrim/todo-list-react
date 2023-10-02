const Buttons = ({ tasks, hideDone, toggleHideDone }) => {
  return (
    <div>
      {tasks.length > 0 && (
        <>
          <button onClick={toggleHideDone} className="section__button">
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
