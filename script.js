function tambah() {
    let inp = document.getElementById("teks");
    let mskInp = inp.value.trim();

    if (mskInp === "") {
        alert("Input tidak boleh kosong");
        return;
    }
    
    let contenr = document.getElementById("ok");
    let li = document.createElement("li");
    
    li.id = "halo";
    li.textContent = mskInp;
    
    let button = document.createElement("button");
    button.className = "hps";
    button.innerText = "Hapus";
    button.style.color = "white";
    button.style.backgroundColor = "green";
    button.style.marginLeft = "25px";
    
    button.onclick = function() {
        contenr.removeChild(li);
    };
    
    li.appendChild(button);
    contenr.appendChild(li);
    
        inp.value = "";
}
