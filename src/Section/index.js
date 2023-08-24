const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <div className="section__heading">
      <h2 className="section__headerTasks">{title}</h2>
      {extraHeaderContent}
    </div>
    <div className="section__body">{body}</div>
  </section>
);

export default Section;
