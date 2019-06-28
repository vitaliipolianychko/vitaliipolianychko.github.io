
(function(){
  let TBL = document.createElement("table");
  TBL.setAttribute("class", "table-root");
  const BUTTON_ADD_COLUMN = document.createElement("button");
  BUTTON_ADD_COLUMN.setAttribute("class", "button-add coll-add")
  BUTTON_ADD_COLUMN.innerHTML= '+'

  const BUTTON_ADD_ROW = document.createElement("button");
  BUTTON_ADD_ROW.setAttribute("class", "button-add row-add cross-axis")
  BUTTON_ADD_ROW.innerHTML= '+'

  const BUTTON_DELETE_ROW = document.createElement("button");
  BUTTON_DELETE_ROW.setAttribute("class", "button-delete row-delete")
  BUTTON_DELETE_ROW.innerHTML= '-'

  const BUTTON_DELETE_COLUMN = document.createElement("button");
  BUTTON_DELETE_COLUMN.setAttribute("class", "button-delete coll-delete cross-axis")
  BUTTON_DELETE_COLUMN.innerHTML= '-'

  let changePosition = event =>
  {
  if(event.target.nodeName==='TD') {
    BUTTON_DELETE_COLUMN.style.left=event.target.offsetLeft +3 + 'px'
    BUTTON_DELETE_ROW.style.top=event.target.offsetTop +3 + 'px'
    row =event.target.parentNode.rowIndex
    coll=event.target.cellIndexW
    }
  }

let addRows = () =>
{
  let trNew = document.querySelectorAll('tr')
  let tdList = trNew[0].querySelectorAll('td')
  let tr = document.createElement('tr')
  for (let i = 0; i < tdList.length; i++) {
    let td = document.createElement('td')
    tr.appendChild(td)
  }
  TBL.appendChild(tr)
}

let addCols = () =>
{
  let trNew = document.querySelectorAll("tr")
  for (let i = 0; i < trNew.length; i++) {
    let tdNew = document.createElement('td')
    trNew[i].appendChild(tdNew)
  }
}

let delRows = () => 
{
  let trNew = document.querySelectorAll('tr')
  if (trNew.length > 1)
  {
  TBL.deleteRow(row)
}
}

let delCols = () => 
{
  let trDel = document.querySelectorAll("tr")
  let tdCount = trDel[0].querySelectorAll('td')
  if(tdCount.length>1){
  for (let i=0; i < trDel.length; i++)
    trDel[i].deleteCell(coll)
  }
}
let showButtons = () => {
  let trNew = document.querySelectorAll('tr')
  let tdList = trNew[0].querySelectorAll('td')
  if (trNew.length > 1)
  {
      BUTTON_DELETE_ROW.style.visibility = "visible"
    }
    if (tdList.length > 1)
    {
      BUTTON_DELETE_COLUMN.style.visibility = "visible"
    }
   }
let hiddenButtons = () =>
 {  
    BUTTON_DELETE_ROW.style.visibility = "hidden"
    BUTTON_DELETE_COLUMN.style.visibility = "hidden"
    
   }

  BUTTON_DELETE_COLUMN.addEventListener("click", delCols);
  BUTTON_DELETE_ROW.addEventListener("click", delRows);
  BUTTON_ADD_COLUMN.addEventListener("click", addCols);
  BUTTON_ADD_ROW.addEventListener("click", addRows);
  BUTTON_DELETE_COLUMN.addEventListener("mouseover", showButtons);
  BUTTON_DELETE_COLUMN.addEventListener("mouseout", hiddenButtons);
  BUTTON_DELETE_ROW.addEventListener("mouseover", showButtons);
  BUTTON_DELETE_ROW.addEventListener("mouseout", hiddenButtons);
  TBL.addEventListener("mousemove", changePosition);
  TBL.addEventListener("mouseover", showButtons);
  TBL.addEventListener("mouseout",hiddenButtons);
  let cellText;
  let row;
  let coll;
  


  let CreateTable = () => {
  let body = document.getElementsByTagName("body")[0];
  let divV = document.createElement("div")
  divV.setAttribute("class","create-div")
  let tblBody = document.createElement("tbody");
  for (let j = 0; j < 3; j++) {
  row = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
      let cell = document.createElement("td");
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  TBL.appendChild(tblBody);
  divV.appendChild(TBL);
  body.appendChild(divV);
  TBL.setAttribute("border", "0");
  divV.appendChild(BUTTON_ADD_COLUMN);
  divV.appendChild(BUTTON_ADD_ROW);
  divV.appendChild(BUTTON_DELETE_COLUMN);
  divV.appendChild(BUTTON_DELETE_ROW);
  
}
  window.onload = CreateTable

})();
