import newStyle from "./FirstPage.module.css";
import Button from "./Button";
function FirstPage() {
  const spans = document.querySelectorAll(".word span");

  spans.forEach((span, idx) => {
    span.addEventListener("click", (e) => {
      e.target.classNameList.add("active");
    });
    span.addEventListener("animationend", (e) => {
      e.target.classNameList.remove("active");
    });

    // Initial animation
    setTimeout(() => {
      span.classNameList.add("active");
    }, 750 * (idx + 1));
  });
  return (
    <div className={newStyle.html}>
      <div className={newStyle.main}>
        <div className={newStyle.border}>
          <div className={newStyle.inner_cutout}>
            <h1 className={newStyle.knockout}>
              Password <br /> Generator
            </h1>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
