import React from "react"
import Card from "./Card"
import "./notes.css"
import {db} from "../../firebaseConnection"
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore"

export function Notes() {
    const [name, setname] = React.useState("")
    const [description, setdescription] = React.useState("")
    const [notesdata, setnotesdata] = React.useState([])
    var todocollection = collection(db, "todos")  // connect to collection using it's name

    // get all document from collection
    async function getdata() {
        var res = await getDocs(todocollection)
        setnotesdata(res.docs.map(doc => ({...doc.data(), id : doc.id})))
    }
    React.useEffect(() => {
        getdata()
    }, [])

    // add document to collection
    async function createcard(e) {
        e.preventDefault();
        if (name === "" || description === "") {
            alert("All fields are required")
            return;
        }
        var obj = {
            name: name,
            disc: description,
            status: "false"
        }
        await addDoc(todocollection, obj)
        setdescription("")
        setname("")
        getdata()
    }

    // updata document in collection
    async function togglebtn(id, data) {
        var path = doc(todocollection, id)
        var data2 = data === true ? false : true
        await updateDoc(path, {status : data2})
        getdata()
    }
    
    // delete document from collection
    async function deletebtn(id) {
        var path = doc(todocollection, id)
        await deleteDoc(path)
        getdata()
    }
    

    return (
        <section className="notesapp">
            <h1 style={{ textAlign: "center", fontSize: "50px", marginTop: "30px" }}>Notes App</h1>
            <div className="notes">
                <form className="form" onSubmit={createcard}>
                    <input type="text" placeholder="Subject" value={name} name="author" onChange={e => setname(e.target.value)} />
                    <input type="text" placeholder="details" value={description} name="details" onChange={e => setdescription(e.target.value)} />
                    <input type="submit" className="submitbtn" value="Create Card" />
                </form>
                <div className="cards" >
                    {
                        notesdata.length === 0 ? <h1>No data to show</h1> : notesdata.map((ele) => <Card key={ele.id} details={ele} togglebtn={togglebtn} deletebtn={deletebtn} />)
                    }
                </div>
            </div>
        </section>
    )
}