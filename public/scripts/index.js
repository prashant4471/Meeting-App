const showMenu = (toggleId, navbarId, bodyId)=>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)
  
    if(toggle && navbar){
      toggle.addEventListener('click', ()=>{
        navbar.classList.toggle('expander')
  
        bodypadding.classList.toggle('body-pd')
      })
    }
  }
  showMenu('nav-toggle','navbar','body-pd')
  
  const linkColor = document.querySelectorAll('.nav__link')
  function colorLink(){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
  const linkCollapse = document.getElementsByClassName('collapse__link')
  var i
  
  for(i=0;i<linkCollapse.length;i++){
    linkCollapse[i].addEventListener('click', function(){
      const collapseMenu = this.nextElementSibling
      collapseMenu.classList.toggle('showCollapse')
  
      const rotate = collapseMenu.previousElementSibling
      rotate.classList.toggle('rotate')
    })
  }


  function convertDate(dateString){
    var p = dateString.split(/\D/g)
    return [p[2],p[1],p[0] ].join("/")
  }
  
  function removeRow(oButton) {
    var empTab = document.getElementById('main-table');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
  }

  function addRows(){
    let allAreFilled = true;
    console.log(document.getElementById("add-data"));
    document.getElementById("add-data").querySelectorAll("[required]").forEach(function(i) {
      console.log(i);
      if (!allAreFilled) return;
      if (!i.value) allAreFilled = false;
    })
    if (!allAreFilled) {
      alert('Fill all the fields');
      return
    }
  
    var table = document.getElementById('main-table');
    var rowCount = table.rows.length;
    var cellCount = table.rows[0].cells.length; 
  
    var row = table.insertRow(rowCount-1);
  
    cell = row.insertCell(0);
  
    var Row = table.rows[rowCount-2];
    var CellValue = Row.cells[0].innerText;
  
    if(rowCount==2){
      cell.innerHTML=1;
    }
    else{
      cell.innerHTML=parseInt(CellValue)+1;
    }
    for(var i = 2; i < cellCount; i++){
      var cell = row.insertCell(i-1);
      var copycel = document.getElementById('i'+i).value;
      if(i==4){
        copycel = convertDate(document.getElementById('i'+i).value);
      }
      else{
        copycel = document.getElementById('i'+i).value;
      }
      console.log(copycel);
      
      cell.innerHTML=copycel;
    }
  
    cell = row.insertCell(cellCount-1);
    var deletebtn = document.createElement('input');
    
    deletebtn.setAttribute('type', 'button');
    // deletebtn.setAttribute('value', 'del');
  
    deletebtn.setAttribute('onclick', 'removeRow(this)');
    deletebtn.setAttribute('id','b2');
    cell.appendChild(deletebtn);
    
    for(var i = 2; i < cellCount; i++){
      var cell = Row.cells[i-1];
      document.getElementById('i'+i).value = null;
    }
    
    //console.log(CellValue);
    for(var i = 2; i < cellCount; i++){
      var cell = Row.cells[i-1];
      document.getElementById('i'+i).value = null;
    }
  }


  function search(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sea");
    filter = input.value.toUpperCase();
    table = document.getElementById("main-table");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
  } else {
        tr[i].style.display = "none";
  }
}       
}
}