function addRows()
{
	var trNew = document.querySelectorAll('tr')
	var tdList = trNew[0].querySelectorAll('td')
	var tr = document.createElement('tr')
	for (var i = 0; i < tdList.length; i++) {
		var td = document.createElement('td')
		tr.appendChild(td)
	}
	tbl.appendChild(tr)
}

function addCols () {
	var trNew = document.querySelectorAll("tr")
	for (var i = 0; i < trNew.length; i++) {
		var tdNew = document.createElement('td')
		trNew[i].appendChild(tdNew)
	}
}
function delRows(indx) 
{
	var i = indx.parentNode.rowIndex;
	var trNew = document.querySelectorAll('tr')
	if (trNew.length > 1)
	{
	document.getElementById("tbl").deleteRow(i);
}
}

function delCols(idx) 
{
	var x = idx.cellIndex
	var trDel = document.querySelectorAll("tr")
	var tdCount = trDel[0].querySelectorAll('td')
	if(tdCount.length>1){
	for (var i=0; i < trDel.length; i++)
		trDel[i].deleteCell(x)
}
}

function showButtons() {
	var trNew = document.querySelectorAll('tr')
	var tdList = trNew[0].querySelectorAll('td')
	var delete_column = document.getElementById('but_del_top');
	var delete_row = document.getElementById('but_del_left');
	if (trNew.length > 1)
	{
    	delete_row.style.visibility = "visible";
    }
    if (tdList.length > 1)
    {
    	delete_column.style.visibility = "visible";	
    }
   }

function hiddenButtons() {
    var count =  document.getElementsByClassName("hidden_button");
    for (var i = 0; i < count.length; i++) {
    	count[i].style.visibility = "hidden";
    }
   }
   
document.querySelector('#tbl').onmousemove = function changePosition (event)
{
	
  if (event.target.tagName.toLowerCase() != 'td')
    return;
   document.querySelector('#but_del_top').style.left=event.target.offsetLeft + 'px'
   document.querySelector('#but_del_left').style.top=event.target.offsetTop + 'px'
  }




