


const fetchlist = async () => {
   const link=await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await link.json();
    console.log(data[9]);

    let box = document.createElement("div")
    box.setAttribute("class", "row box");
    
    document.body.append(box);
       let head= "<div>User List   </div>  ";

    let phead = document.createElement("h1");
    phead.textContent = "User List";
    phead.classList.add('text-bolder',"pheading","text-white","p-3");
    document.body.insertBefore(phead, box);

    data.map(obj =>  {
    

       box.innerHTML += 

    `
        <div class=" col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-4  text-justify row m-xl-5 m-lg-4 m-md-3 m-sm-5 mt-3 mt-sm-3 mt-md-5 mt-lg-5 mx-5 rounded shadow-lg  sbox">


        <div  class="   fw-bolder d1 ">Name:${obj.name} </div>
        <div class="mt-1  d2">Email : ${obj.email} </div>
        <div class="mt-2 d3"> Street :${obj.address.street} </div>
        <div class="mt-2 d4">City : ${obj.address.street}
        
        </div>
        
  `


    })  


}

fetchlist()