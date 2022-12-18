const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.parentElement.classList.contains("active")) {
      question.parentElement.classList.toggle("active");
    } else {
      questions.forEach((question) => {
        question.parentElement.classList.remove("active");
      });
      question.parentElement.classList.add("active");
    }
  });
});
