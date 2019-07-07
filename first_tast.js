class Square {
  constructor(row, coll) {
    this.row = row;
    this.coll = coll;
    this.current_coll = 0;
    this.current_row = 0;
    this.CreateBasicElements();
  }

  CreateBasicElements = () => {
    this.table = document.createElement('table');
    this.table.setAttribute('class', 'table-root');

    this.button_add_column = document.createElement('button');
    this.button_add_column.setAttribute('class', 'button-add coll-add');
    this.button_add_column.innerHTML = '+';

    this.button_add_row = document.createElement('button');
    this.button_add_row.setAttribute('class', 'button-add row-add');
    this.button_add_row.innerHTML = '+';

    this.button_delete_row = document.createElement('button');
    this.button_delete_row.setAttribute('class', 'button-delete row-delete');
    this.button_delete_row.innerHTML = '-';

    this.button_delete_column = document.createElement('button');
    this.button_delete_column.setAttribute('class', 'button-delete coll-delete');
    this.button_delete_column.innerHTML = '-';

    this.button_add_row.addEventListener('click', this.addRows);
    this.button_add_column.addEventListener('click', this.addCols);
    this.button_delete_row.addEventListener('click', this.delRows);
    this.button_delete_column.addEventListener('click', this.delCols);
    this.button_delete_column.addEventListener('mouseover', this.showButtons);
    this.button_delete_column.addEventListener('mouseout', this.hiddenButtons);
    this.button_delete_row.addEventListener('mouseover', this.showButtons);
    this.button_delete_row.addEventListener('mouseout', this.hiddenButtons);
    this.table.addEventListener('mousemove', this.changePosition);
    this.table.addEventListener('mouseover', this.showButtons);
    this.table.addEventListener('mouseout', this.hiddenButtons);
  };

  render = () => {
    let body = document.getElementsByTagName('body')[0];
    const container = document.createElement('div');
    container.setAttribute('class', 'root-container');
    let tblBody = document.createElement('tbody');
    for (let j = 0; j < this.row; j++) {
      let rows = document.createElement('tr');
      for (let i = 0; i < this.coll; i++) {
        let cell = document.createElement('td');
        rows.appendChild(cell);
      }
      this.table.appendChild(rows);
    }

    this.table.appendChild(tblBody);
    container.appendChild(this.table);
    body.appendChild(container);
    container.appendChild(this.button_add_column);
    container.appendChild(this.button_add_row);
    container.appendChild(this.button_delete_column);
    container.appendChild(this.button_delete_row);
  };

  addRows = () => {
    let trNew = this.table.querySelectorAll('tr');
    let tdList = trNew[0].querySelectorAll('td');
    let tr = document.createElement('tr');
    for (let i = 0; i < tdList.length; i++) {
      let td = document.createElement('td');
      tr.appendChild(td);
    }
    this.table.appendChild(tr);
  };

  addCols = () => {
    let trNew = this.table.querySelectorAll('tr');
    for (let i = 0; i < trNew.length; i++) {
      let tdNew = document.createElement('td');
      trNew[i].appendChild(tdNew);
    }
  };

  delRows = () => {
    let trNew = this.table.querySelectorAll('tr');
    if (trNew.length > 1) {
      this.table.deleteRow(this.current_row);
    }

    if (trNew.length - 1 === 1) {
      this.button_delete_row.style.visibility = 'hidden';
    }
  };

  delCols = () => {
    let trDel = this.table.querySelectorAll('tr');
    let tdCount = trDel[0].querySelectorAll('td');
    if (tdCount.length > 1) {
      for (let i = 0; i < trDel.length; i++) trDel[i].deleteCell(this.current_coll);
    }
    if (tdCount.length - 1 === 1) {
      this.button_delete_column.style.visibility = 'hidden';
    }
  };

  hiddenButtons = () => {
    this.button_delete_row.style.visibility = 'hidden';
    this.button_delete_column.style.visibility = 'hidden';
  };

  showButtons = event => {
    let trNew = this.table.querySelectorAll('tr');
    let tdList = trNew[0].querySelectorAll('td');
    if (trNew.length > 1) {
      this.button_delete_row.style.visibility = 'visible';
    }

    if (tdList.length > 1) {
      this.button_delete_column.style.visibility = 'visible';
    }
    if (trNew.length === 1) {
      this.button_delete_row.style.visibility = 'hidden';
    }
  };

  changePosition = event => {
    let trNew = 0;
    let tdList = 0;
    if (event.target.nodeName === 'TD') {
      this.button_delete_column.style.left = event.target.offsetLeft + 3 + 'px';
      this.button_delete_row.style.top = event.target.offsetTop + 3 + 'px';
      this.current_row = event.target.parentNode.rowIndex;
      this.current_coll = event.target.cellIndex;
    }
    this.button_delete_row.addEventListener('click', event => {
      trNew = this.table.querySelectorAll('tr');
      console.log(trNew.length - 1);
      if (this.current_row === trNew.length) {
        this.button_delete_row.style.top = event.target.offsetTop - 42 + 'px';
      }
    });
    this.button_delete_column.addEventListener('click', event => {
      trNew = this.table.querySelectorAll('tr');
      tdList = trNew[0].querySelectorAll('td');
      if (this.current_coll === tdList.length) {
        this.button_delete_column.style.left = event.target.offsetLeft - 42 + 'px';
      }
    });
  };
}

const square = new Square(3, 3);
square.render();
const second_square = new Square(4, 4);
second_square.render();
