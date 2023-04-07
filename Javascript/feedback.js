// ----------------------- For Collecting Feedbacks -------------------------------
let form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let data = new FormData(form);
      fetch('https://script.google.com/macros/s/AKfycbz0p0R-NYtQM-SARyP4w7ZYGNoMfcRrT7rtdowzD3EK-6RRAnGXBGyNXyvTAD1Y2I_w/exec', {
        method: "POST",
        body: data
      })
        .then(res => res.text())
        .then(data => {
          document.querySelector("#msg").innerHTML = data;
          document.querySelector("#sub").value = "Submit";
        });
    })

    
