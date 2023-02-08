import { useState } from 'react';






export function AddForm({ adduser }) {

  const initialformstate = { id: null, name: '', email: '', location: '', };
  const [user, setuser] = useState(initialformstate);



  const handleChage = (event) => {

    console.log(event.target.value);

    const { name, value } = event.target;


    setuser({ ...user, [name]: value });


  };




  return (

    <div className='adduserbox' >

      <div className='mb-3 text-center' >
        <h1 className='card-title text-white'>AddUSER</h1>
      </div>

      <form onSubmit={event => {
        event.preventDefault();
        if(user.name !== '' && user.email !== '' && user.location !== '' ){
                  adduser(user);
                  setuser(initialformstate);
        }

      }}>
        <div className="mb-3">

        <label className='form-label' htmlFor="Name">Name</label><br />
        <input className='form-control' value={user.name} name='name' onChange={handleChage} type="text" id='Name' /><br />
        </div>
        <label className='form-label' htmlFor="email">Email</label><br />
        <div className="mb-3">
        <input  className='form-control'  value={user.email} name='email' onChange={handleChage} type="email" id='email' /><br />
        </div>

<div className="mb-3">

        <label className='form-label' htmlFor="location">Location</label><br />
        <input className='form-control'  value={user.location} name='location' onChange={handleChage} type="text" id='Name' /><br />
</div>
<div className="d-grid">
        <button className='btn btn-primary' type='submit'>ADDUSER</button>

</div>


      </form>


    </div>


  );




}
