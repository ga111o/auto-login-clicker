document.getElementById("saveButton").addEventListener("click", function () {
  const saveButton = document.getElementById("saveButton");
  const originalText = saveButton.textContent;

  saveButton.disabled = true;

  browser.storage.sync
    .set({
      userId: document.querySelector("#userId").value,
      userPw: document.querySelector("#userPw").value,
    })
    .then(() => {
      saveButton.textContent = "저장됨!";
      saveButton.style.backgroundColor = "#4CAF50";
    })
    .catch((error) => {
      saveButton.textContent = "저장 실패!" + error;
      saveButton.style.backgroundColor = "#f44336";
      console.error("저장 실패:", error);
    })
    .finally(() => {
      setTimeout(() => {
        saveButton.textContent = originalText;
        saveButton.style.backgroundColor = "";
        saveButton.disabled = false;
      }, 1000);
    });
});

browser.storage.sync.get(["userId", "userPw"]).then((result) => {
  document.querySelector("#userId").value = result.userId || "";
  document.querySelector("#userPw").value = result.userPw || "";
});
