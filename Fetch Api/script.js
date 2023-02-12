async function update(eventid){
    const response=await fetch("localhost:3000/update")
    method:'PUT'
    headers: {'Content-Type' ; 'application/json'}

 Body:JSON.stringify({ 
    id:eventid,
});

const data=await response.json();
}

async function create (eventtype,eventid){
    const response=await fetch("localhost:3000/create")
    method:'POST'
    headers: {'Content-Type' ; 'application/json'}

 Body:JSON.stringify({ 
    event: eventtype,
    id:eventid,
});

const data=await response.json();
}
async function deleteevent(eventid){
    const response=await fetch("localhost:3000/delete")
    method:'DELETE'
    headers: {'Content-Type' ; 'application/json'}

 Body:JSON.stringify({ 
    id:eventid,
});

const data=await response.json();
}


