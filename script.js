const panels = document.querySelectorAll(".panel");
const content = document.createElement('h3');

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if(panel.classList.contains('active')){
       removeActiveClasses();
      }else{
        removeActiveClasses();
        panel.classList.add("active");
        panel.children[0].style.display="block";

      }
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
    panel.children[0].style.display="none";
  });
};
