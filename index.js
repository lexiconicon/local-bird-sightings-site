/* Using HTML, Bootstrap, and Javascript, create a single page website that does the following:
1. a Bootstrap-styled table representing your choice of data
2. a Bootstrap-styled form that allows a user to add new row to the table when clicking submit */



let id = 1; //starts the number for the entries at one

document.getElementById('add').addEventListener('click', (event) => {
    event.preventDefault(); //keeps page from refreshing with every click; had to look this one up


    let birdName = document.getElementById('birdName').value; //these two lines get the input from the form (aka value)
    let sightingDate = document.getElementById('sightingDate').value;

    let newTR = document.createElement('tr'); //this creates a new table row 

    let birdNumber = document.createElement('td'); //this is for the entry number
        birdNumber.innerHTML = id; //connecting it to the id variable I created earlier
        newTR.append(birdNumber); //appends the # to the new table row

   
    let birdNameNode = document.createElement('td'); //creates table data for the bird name that is entered
        birdNameNode.innerHTML = birdName;
        newTR.append(birdNameNode); //appends to new table row
    
    let sightingDateNode = document.createElement('td'); //creates table data for the sighting date that is entered
        sightingDateNode.innerHTML = sightingDate;
        newTR.append(sightingDateNode); //appends to new table row

    id++; //makes sure that each number incrementally is higher than the last
    
    document.getElementById('tBody').appendChild(newTR); //appends the new table row to the dom for each entry
    
    document.getElementById('birdName').value = ''; //empties the fields after you submit one
    document. getElementById('sightingDate').value = '';
  
})


//another way I was trying this based off the To Do list video from this week but it wouldn't stay permanently added to the DOM
 /*  let table = document.getElementById('tBody');
    let row = table.insertRow();

    row.setAttribute('id', `item-${id}`);

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = document.getElementById('new-bird').value;
    row.insertCell(2).innerHTML = document.getElementById('sighting-date').value;
    
    id++;
    document.getElementById('new-bird').value = '';
    document. getElementById('sighting-date').value = '';*/