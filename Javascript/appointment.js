let form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let data = new FormData(form);
      fetch('https://script.google.com/macros/s/AKfycbyDJ263gVfKScE-OaKJXlDNKIoZJdkuk_PFdSNERbO9QcV0ZSuGnzySpD-ptgDzA1NcPQ/exec', {
        method: "POST",
        body: data
      })
        .then(res => res.text())
        .then(data => {
          document.querySelector("#msg").innerHTML = data;
          document.querySelector("#sub").value = "Submit";
        });
    })

    
