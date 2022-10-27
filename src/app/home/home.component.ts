import { Component, OnInit } from '@angular/core';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase"
import { doc, getDoc, deleteDoc  } from "firebase/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {

//вывод

    // const querySnapshot = await getDocs(collection(db, "products"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });


//получение

//     const docRef = doc(db, "products", "phone_1");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
//   }


//создание

// const docRef = await addDoc(collection(db, "products"), {
//   title: "Phone super pro max",
//   price: 5000,
//   spec: {
//     RAM : 8,
//     ROM : 512,
//   },
//   category: "Phones"
// });
// console.log("Document written with ID: ", docRef.id);

//удалить

// await deleteDoc(doc(db, "products", "7n49AiZc9MNSfuUskjnT"));
}
}