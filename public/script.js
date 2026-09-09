function showAnswer() {
  const divAnswer = document.getElementById("answer");

  selectedPhrase = getPhrase();

  divAnswer.innerHTML = selectedPhrase;

  divAnswer.classList.remove("hide");
}

function hideAnswer() {
  const divAnswer = document.getElementById("answer");

  divAnswer.classList.add("hide");
}

async function getPhrase() {
  let selectedPhrase = document.getElementById("phrase").value;

  const url = "https://localhost:3000/resposta";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: {
        phrase: phrase,
      }
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }

  return selectedPhrase;
}