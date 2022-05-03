import contacts from './contacts.json'
import './App.css';
import {useState} from 'react'


function App() {


  const [contactsList , setContactsList] = useState(contacts.slice(0,5))

  const newContact =() => {

    const randomNumber = Math.floor(Math.random() * contacts.length) 

    const newRandomArr = contacts[randomNumber]    

    const arr = [...contactsList]
    arr.push(newRandomArr)
    setContactsList(arr)
    
  }

  // const sortByName =()=> {

  //   const arr = contactsList
  //   arr.sort()
  //   setContactsList(arr)

  // }

  // const sortByPopulatity =()=> {

  // }


  return (
    <div className="App">
      <main>

        
      <h1>IRON CONTACTS</h1>
      <button onClick={()=>newContact()}> ADD CONTACT </button>
      {/* <button onClick={()=>sortByName()}> SORT BY NAME </button>
      <button onClick={()=>sortByPopulatity()}> SORT BY Popularity </button> */}


        <table>

        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonEmmy</th>
          <th>wonOscar</th>
        </tr>

        {contactsList.map(contact =>{
          return (
            <tr key={contact.id}>
              <img src={contact.pictureUrl} alt={contact.name}/>
              <th>{contact.name}</th>
              <th>{contact.popularity}</th>
              <th>{contact.wonEmmy? '🏆' : ''}</th>
              <th>{contact.wonOscar? '🏆' : ''}</th>

            </tr> )
        })}        




        </table>
      </main>
     </div>
  );
}

export default App;


        // name 
        // pictureUrl
        // popularity
        // id
        // wonOscar
        // wonEmmy