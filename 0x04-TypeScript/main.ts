interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const studentList: Student[] = [
    {
        firstName: 'Demilade',
        lastName: 'Abatan',
        age: 20,
        location: 'Nigeria'
    },
    {
        firstName: 'Aissam',
        lastName: 'Tahiri',
        age: 26,
        location: 'Morocco'
    }
]

const table = document.createElement('table')
const tbody = document.createElement('tbody')

studentList.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName
    locationCell.textContent = student.location


    row.appendChild(firstNameCell)
    row.appendChild(locationCell)

    tbody.appendChild(row)
})

table.appendChild(tbody)
document.body.appendChild(table)