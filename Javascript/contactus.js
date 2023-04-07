let form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let data = new FormData(form);
      fetch('https://script.google.com/macros/s/AKfycbySQvguJupVfnn9pc3Bv_VZ-FbYwQWfNLXHPVGT4MmV2RuIr7Ro5uvpJyz_JvTNgQ4vbw/exec', {
        method: "POST",
        body: data
      })
        .then(res => res.text())
        .then(data => {
          document.querySelector("#msg").innerHTML = data;
          document.querySelector("#sub").value = "Submit";
        });
    })

    
