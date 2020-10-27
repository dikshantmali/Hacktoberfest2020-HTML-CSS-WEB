function changings() {
    const tableBodyRows = document.querySelectorAll("#donorsList tr")
    for (let i = 0; i < tableBodyRows.length; i++) {
        const serials = tableBodyRows[i].querySelector("td")
        serials.innerHTML = i + 1
    }
}


const displayDonor = (donorId) => {
    const myDonor = db.collection('donors').doc(donorId)
    myDonor.get().then(function (doc) {

        const profileSpecs = document.querySelectorAll(".profileSpecs")
        profileSpecs[0].innerHTML = doc.data().nameDonor
        profileSpecs[1].innerHTML = doc.data().bloodDonor
        profileSpecs[2].innerHTML = doc.data().addressDonor
        profileSpecs[3].innerHTML = doc.data().contactDonor
    })
}


const addInTable = (donor) => {
    const donorsList = document.getElementById("donorsList")
    const donorRow = document.createElement("tr")
    donorRow.className = "modal-trigger"
    donorRow.setAttribute("data-target", "donorDetails")
    donorRow.setAttribute("id", donor.id)
    donorRow.addEventListener('click', () => {
        displayDonor(donor.id)
    })
    donorRow.innerHTML = `
    <td class="texts"></td>
    <td class="texts">${donor.data().bloodDonor}</td>
    <td class="texts">${donor.data().nameDonor}</td>
    <td class="texts"><span class="texts badge red white-text">view</span></td>
    `
    donorsList.appendChild(donorRow)
}

const editInTable = (donor) => {
    const updateDonor = document.getElementById(donor.id)
    const updatedDonorSpecs = updateDonor.querySelectorAll("td")
    updatedDonorSpecs[1].innerHTML = donor.data().bloodDonor
    updatedDonorSpecs[2].innerHTML = donor.data().nameDonor
}



db.collection('donors').onSnapshot(snapshot => {

    snapshot.docChanges().forEach(change => {
        if (change.type == 'added') {
            addInTable(change.doc)
        }
        else if (change.type == 'modified') {
            editInTable(change.doc)
        }
        changings()
    })

})


