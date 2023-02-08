import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Tablecontainer } from './Tablecontainer'
import { AddForm } from './AddForm'
import { Editform } from './Editform'


function App() {
 

const datas = [
  {id:1,
  name: 'John Smith',
  email: 'john.smith@gmail.com',
  location:'india'
  },
  {id:2,
    name: 'John Smith2',
    email: 'john.smith2@gmail.com',
    location:'india'
    },
    {id:3,
      name: 'John Smith3',
      email: 'john.smith3@gmail.com',
      location:'india'
      },
      


]

  const [userdata,setuserdata]=useState(datas)

  const initialformstate = { id: null, name: '', email:'',location: '', };

  const [currentuserdata,setcurrentuserdata]=useState([initialformstate])

  const[editing,setediting]=useState(false)


console.log("currendata :",userdata);



  const editfun =(datas)=>{

setediting(true)
setcurrentuserdata({id:datas.id,name:datas.name,email:datas.email,location:datas.location})


  }

  





const adduser = (dataval) =>{

dataval.id=userdata.length+1;

setuserdata([...userdata,dataval])


}

const updateUser =(id,updateUser)=>{

  setediting(false)
  setuserdata(userdata.map((user) => (user.id ==id ? updateUser : user) ))

}


const deletefun =(user) => {

  setuserdata(userdata.filter((data) => user !== data.id  ))   
setediting(false)


}




  return (
    <div className="App">

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
  <a className="navbar-brand">
    CRUD OPERATION
  </a>    
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link active">Home</a>
                  <a href="#" className="nav-item nav-link">Profile</a>
                    <a href="#" className="nav-item nav-link">Messages</a>

                </div>
          
            </div>
        
</div>
    </nav>

<div className="container ">










  <div className="row mt-5">

    <div className="  col-lg-4 col-md-5 col-12">
<div className='formcontainer'>
{editing ?

(<div> <Editform currentuserdata={currentuserdata} setediting={setediting} updateUser={updateUser}  /> </div>)
:
(<div>  
<AddForm adduser={adduser} setuserdata={setuserdata} />

</div>)   }

</div>
    </div>
    <div className=" col-lg-8  col-md-7  ">

<div className='listcontainer'>

<Tablecontainer  setediting={setediting} editfun={editfun} deletefun={deletefun} userdata={userdata} />

</div>
    </div>


  </div>

</div>




     
    </div>
  )
}


export default App






