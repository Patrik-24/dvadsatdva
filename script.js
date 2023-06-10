let data;

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
            data = json;
            vyklesli();
            console.log(json);
        })

function vyklesli(){
      
      let div = document.getElementById("zapis");
      let table = document.createElement("table");
      let tbody = document.createElement("tbody");

      
      for (const toDo of data) {
            
            let riadok = document.createElement("tr");

            let id = document.createElement("td");
            id.textContent = toDo.id;
            riadok.appendChild(id);

            let title = document.createElement("td");
            title.textContent = toDo.title;
            riadok.appendChild(title);

            let stav = document.createElement("td");
            stav.textContent = toDo.completed;
            riadok.appendChild(stav);
            
            /*
            let p = document.createElement("p");
            p.classList.add("tabulka");
            p.innerHTML = `Čislo úlohy: ${toDo.id} Nazov úlohy: ${toDo.title}, Stav úlohy: ${toDo.completed}`;
            div.appendChild(p);*/

            tbody.appendChild(riadok)
      }

      table.appendChild(tbody);
      
      
      div.innerHTML = "";
      div.appendChild(table);
}

