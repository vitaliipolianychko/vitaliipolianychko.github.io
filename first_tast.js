class Square {

  constructor(row, coll) {

    this.row = row;
    this.coll = coll;
    this.current_coll = 0;
    this.current_row = 0;
    this.table = document.createElement("table");
    this.table.setAttribute("class", "table-root");

      
    this.BUTTON_ADD_COLUMN = document.createElement("button");
    this.BUTTON_ADD_COLUMN.setAttribute("class", "button-add coll-add")
    this.BUTTON_ADD_COLUMN.innerHTML= '+'

    this.BUTTON_ADD_ROW = document.createElement("button");
    this.BUTTON_ADD_ROW.setAttribute("class", "button-add row-add")
    this.BUTTON_ADD_ROW.innerHTML= '+'

    this.BUTTON_DELETE_ROW = document.createElement("button");
    this.BUTTON_DELETE_ROW.setAttribute("class", "button-delete row-delete")
    this.BUTTON_DELETE_ROW.innerHTML= '-'

    this.BUTTON_DELETE_COLUMN = document.createElement("button");
    this.BUTTON_DELETE_COLUMN.setAttribute("class", "button-delete coll-delete")
    this.BUTTON_DELETE_COLUMN.innerHTML= '-'

    this.BUTTON_ADD_ROW.addEventListener('click', () => {
      this.addRows()
    });

    this.BUTTON_ADD_COLUMN.addEventListener('click', () => {
      this.addCols()
    });

    this.BUTTON_DELETE_ROW.addEventListener('click', () => {
      this.delRows()
    });

    this.BUTTON_DELETE_COLUMN.addEventListener('click', () => {
      this.delCols()
    });

    this.BUTTON_DELETE_COLUMN.addEventListener('mouseover', () => {
      this.showButtons()
    });

    this.BUTTON_DELETE_COLUMN.addEventListener('mouseout', () => {
      this.hiddenButtons()
    });

     this.BUTTON_DELETE_ROW.addEventListener('mouseover', () => {
      this.showButtons()
    });

    this.BUTTON_DELETE_ROW.addEventListener('mouseout', () => {
      this.hiddenButtons()
    });

    this.table.addEventListener('mousemove', () => {
      this.changePosition()
    });
    this.table.addEventListener('mouseover', () => {
      this.showButtons()
    });
    this.table.addEventListener('mouseout', () => {
      this.hiddenButtons()
    });
  }
  
  createTable() {
  
  let body = document.getElementsByTagName("body")[0];
  let divV = document.createElement("div")
  divV.setAttribute("class","create-div")
  let tblBody = document.createElement("tbody");
  for (let j = 0; j < this.row; j++) {
  let rows = document.createElement("tr");
  for (let i = 0; i < this.coll; i++) {
      let cell = document.createElement("td");
      rows.appendChild(cell);
    }
    tblBody.appendChild(rows);
  }

  this.table.appendChild(tblBody);
  divV.appendChild(this.table);
  body.appendChild(divV);
  this.table.setAttribute("border", "0")
  divV.appendChild(this.BUTTON_ADD_COLUMN);
  divV.appendChild(this.BUTTON_ADD_ROW);
  divV.appendChild(this.BUTTON_DELETE_COLUMN);
  divV.appendChild(this.BUTTON_DELETE_ROW);
   }
  
  addRows() {

  let trNew = this.table.querySelectorAll('tr')
  let tdList = trNew[0].querySelectorAll('td')
  let tr = document.createElement('tr')
  for (let i = 0; i < tdList.length; i++) {
    let td = document.createElement('td')
    tr.appendChild(td)
  }
  this.table.appendChild(tr)
  }

  addCols() {
  let trNew = this.table.querySelectorAll("tr")
  for (let i = 0; i < trNew.length; i++) {
    let tdNew = document.createElement('td')
    trNew[i].appendChild(tdNew)
  }
  }

  delRows() {
  let trNew = document.querySelectorAll('tr')
  if (trNew.length > 1)
  {
  this.table.deleteRow(this.current_row)
  }

}

  delCols() {
  let trDel = this.table.querySelectorAll("tr")
  let tdCount = trDel[0].querySelectorAll('td')
  if(tdCount.length>1){
  for (let i=0; i < trDel.length; i++)
    trDel[i].deleteCell(this.current_coll)
  }
  }

  hiddenButtons() {
    this.BUTTON_DELETE_ROW.style.visibility = "hidden"
    this.BUTTON_DELETE_COLUMN.style.visibility = "hidden"
  }

  showButtons() {
  let trNew = document.querySelectorAll('tr')
  let tdList = trNew[0].querySelectorAll('td')
  if (trNew.length > 1)
  {
      this.BUTTON_DELETE_ROW.style.visibility = "visible"
    }
    if (tdList.length > 1)
    {
      this.BUTTON_DELETE_COLUMN.style.visibility = "visible"
    }
  }

  changePosition(e) {

    if (event.target.nodeName==='TD') {
    this.BUTTON_DELETE_COLUMN.style.left=event.target.offsetLeft +3 + 'px'
    this.BUTTON_DELETE_ROW.style.top=event.target.offsetTop +3 + 'px'
    this.current_row = event.target.parentNode.rowIndex
    this.current_coll = event.target.cellIndex
    }
  }
}

const square = new Square(3, 3);
square.createTable();
const second_square = new Square(4,4);
second_square.createTable();










