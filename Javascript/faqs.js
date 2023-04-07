let form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let data = new FormData(form);
      fetch('https://script.google.com/macros/s/AKfycbxMWzHa1M86Wqj2MtQz4_KbRq9bBCaXZSzlrteRqadlzWE2twDXbz7tuJQe2326cVRZtQ/exec', {
        method: "POST",
        body: data
      })
        .then(res => res.text())
        .then(data => {
          document.querySelector("#msg").innerHTML = data;
          document.querySelector("#sub").value = "Submit";
        });
    })
