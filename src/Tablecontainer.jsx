


export function Tablecontainer({ userdata, deletefun, editfun }) {

  return (

    <div className="table-con" >
      <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
      <th className="text-center" colSpan="2">Action</th>
    </tr>
  </thead>

      {userdata.length > 0 ? userdata.map((user) => (
        <tbody  key={user.id} >

    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.location}</td>
      <td>            <button className="btn btn-primary"
              onClick={(() => {

                editfun(user);
                console.log("clicked",user);


              })}

            >EDIT</button></td>
            <td>
            <button  className="btn btn-danger" onClick={(() => {
              deletefun(user.id);
              console.log(user);

            })}>DELETE</button></td>
    </tr>




    </tbody>




    )) : (<h1> No data here </h1>)}


        {/* <div className='box' key={user.id}>

          <div className='info'>
            <h4>Name :{user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h4>location:{user.location}</h4>
          </div>

          <div>
            <button
              onClick={(() => {

                editfun(user);
                console.log("clicked",user);


              })}

            >edit</button>
            <button onClick={(() => {
              deletefun(user.id);
              console.log(user);

            })}>delete</button>
          </div>

        </div> */}



{/* 
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>

  </tbody>
</table> */}


</table>
    </div>



  );




}
