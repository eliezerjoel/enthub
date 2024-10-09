import VentureCard from "@/components/VentureCard";
import Image from "next/image";
// import ventures from "@/data/ventures.json";


export default function Home() {
  const ventures = [
  {
    "$id": "1",
    "name": "Grand Conference Hall",
    "description": "A spacious room with modern amenities, suitable for large conferences and events.",
    "writeUp": "Grand Conference Hall",
    "rating": 10,
    "image": "room-1.jpg"
  },
  {
    "$id": "2",
    "name": "Studio",
    "description": "A room with a comfortable seating arrangement, ideal for small group meetings and brainstorming sessions.",
    "writeUp": "Studio",
    "rating": 8,
    "image": "room-2.jpg"
  },
  {
    "$id": "3",
    "name": "Conference Room",
    "description": "A room with ample seating, ideal for group meetings and presentations.",
    "writeUp": "Conference Room",
    "rating": 7,
    "image": "room-3.jpg"
  }
]

  return <>
  {ventures.length > 0 ? (
    ventures.map((venture) => (
      <VentureCard venture={venture} />
    )
    )
  ) : (
    <h2>No ventures to show</h2>
  )}</>;
}
