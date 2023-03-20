const notes = [
     {
        id: 1,
        text: "Mathesis",
        author: "Firmicus Maternus",
        date: "1 AD",
        topics: ["Astrology"]
    },
    {
        id: 2,
        text: "Yoga Sutras of Patanjali",
        author: "Patanjali",
        date: "1000 BC",
        topics: ["Yoga"]
    },
    {
        id: 3,
        text: "Initiation Into Hermetics",
        author: "Franz Bardon",
        date: "1920 AD",
        topics: ["Hermeticism"]
    }
]
console.log(notes)

const books = [
    ({
        id: 4,
        text: "Greek Magical Papyri",
        author: "Unknown",
        date: "59 BC",
        topics: ["Anthropology"]
    }),
    ({
        id: 5,
        text: "Picatrix",
        author: "Unknown",
        date: "500 AD",
        topics: ["Astral Magic"]
    }),
    ({
        id: 6,
        text: "Maldoror",
        author: "Comte Du Leautremont",
        date: "1890",
        topics: ["Surrealist Poetry"]
    })
]




for (const book of books){
    notes.push(book)
}
    

for (const note of notes) {
    console.log(note.text)
}
// console.log(notes)

console.log("*** All Note Topics ***")

for (const note of notes) {
    for (const topic of note.topics)
    console.log(note.topics)
}

console.log("*** Average Topics Per Note ***")
let totalTopics = 0
for (const note of notes) {
    for (const topic of note.topics) {
        totalTopics += 1
    }
    
}
const averageTopics = totalTopics / notes.length
console.log(averageTopics)

const filteredNotes = []
const criteria = "Astrology"
for(const note of notes)
if (note.topics.includes("Astrology")) {
filteredNotes.push(note)
}
console.log(filteredNotes)

console.log("***  Note Articles  ***")
let htmlString = ""
for(const note of notes) {
htmlString += `<article>${note.text}`
for (const topic of note.topics){
htmlString += `<section>${topic}</section>`

    }
htmlString += `</article>\n`
}

console.log(htmlString)


  



