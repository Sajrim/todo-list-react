const Buttons = ({ tasks, hideDoneTasks }) => {
  return (
    <div>
      {tasks.length > 0 && (
        <>
          <button className="section__button">
            {hideDoneTasks.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone{" "}
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
