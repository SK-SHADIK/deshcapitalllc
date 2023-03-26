// ----------------------- For Collecting Feedbacks -------------------------------
function myFunction() {
}

let form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let data = new FormData(form);
      fetch('https://script.google.com/macros/s/AKfycbxTiY2hFjr9LRBEQxWZo2YJb-KD_m28PFvWPAcKGtFduLd-3im4ZJodkQfXnJ_mCfgB/exec', {
        method: "POST",
        body: data
      })
        .then(res => res.text())
        .then(data => {
          document.querySelector("#msg").innerHTML = data;
          document.querySelector("#sub").value = "Submit";
        });
    })

    
