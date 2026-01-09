import { useState } from "react"
import {nanoid} from "nanoid"
export default function animalsArray () {
const [animalArray, setAnimalArray] = useState([
  {
    id: nanoid(),
    name: "Great Green Macaw",
    scientificName: "",
    funFact: "",
    image: "",
    category: "bird",
  },
]);
    return {

}
}