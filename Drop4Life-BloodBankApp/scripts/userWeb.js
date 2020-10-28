var donorEmail;
var DonorProfile=null;

const userHeading = (username) => {
    username = username.slice(0, username.lastIndexOf('@'))
    document.getElementById("usernameHeading").innerHTML = username
}



function logOut() {
    const auth = firebase.auth();
    auth.signOut().then(function () {
        // Sign-out successful.
        window.location = "index.html"
    }).catch(function (error) {
        // An error happened.
        console.log(error.message)
    });

}

const displayUserProfile=()=>{
    
    const donorSpecs=document.querySelectorAll(".donorSpecs")
    donorSpecs[0].innerHTML=DonorProfile.nameDonor
    donorSpecs[1].innerHTML=DonorProfile.addressDonor
    donorSpecs[2].innerHTML=DonorProfile.emailDonor
    donorSpecs[3].innerHTML=DonorProfile.contactDonor
    donorSpecs[4].innerHTML=DonorProfile.Id
    donorSpecs[5].innerHTML=DonorProfile.bloodDonor
    const updateDonorSpecs=document.querySelectorAll(".updateProfile")
    updateDonorSpecs[0].value=DonorProfile.nameDonor
    updateDonorSpecs[1].value=DonorProfile.addressDonor
    updateDonorSpecs[2].value=DonorProfile.contactDonor
    updateDonorSpecs[3].value=DonorProfile.bloodDonor
}
const updateProfile=()=>{

    const updateDonorSpecs=document.querySelectorAll(".updateProfile")
    DonorProfile.nameDonor=updateDonorSpecs[0].value
    DonorProfile.addressDonor=updateDonorSpecs[1].value
    DonorProfile.contactDonor=updateDonorSpecs[2].value
    DonorProfile.bloodDonor=updateDonorSpecs[3].value

    db.collection('donors').doc(DonorProfile.Id).update({
        nameDonor:DonorProfile.nameDonor,
        bloodDonor:DonorProfile.bloodDonor,
        contactDonor:DonorProfile.contactDonor,
        addressDonor:DonorProfile.addressDonor
    })
    displayUserProfile()
    $('#donorProfile').modal('close')
}

function toggleUserProfile() {
    const NotADonor = document.getElementById("NotADonor")
    const IsADonor = document.getElementById("IsADonor")
    NotADonor.classList.toggle("hide")
    IsADonor.classList.toggle("hide")
}

function addDonor() {

    const nameDonor = document.getElementById("donorName").value
    const addressDonor = document.getElementById("donorAddress").value
    const contactDonor = document.getElementById("donorContact").value
    const bloodDonor = document.getElementById("donorBlood").value
    const emailDonor = donorEmail
    DonorProfile = { nameDonor, addressDonor, contactDonor, bloodDonor, emailDonor }
    db.collection('donors').add(DonorProfile)
    $('#addDonor').modal('close')
    toggleUserProfile()
    displayUserProfile()
}

const checkUserProfile=()=>{
    document.getElementById("loader").classList.add("hide")
    if(DonorProfile === null){
        document.getElementById("NotADonor").classList.toggle("hide")
    }
    else{
        document.getElementById("IsADonor").classList.toggle("hide")
        displayUserProfile()
        userHeading(DonorProfile.emailDonor)
    }
}




const getDonor=()=>{
    db.collection('donors').where('emailDonor', '==',donorEmail).get().then((snapshots) => {
        snapshots.forEach((doc) => {
            DonorProfile=doc.data()
            DonorProfile.Id=doc.id
            console.log(DonorProfile)
        })
        checkUserProfile()
    })
}




window.onload=()=>{
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            // User is signed in.
            window.location = "index.html"
        }
        else {
            donorEmail = user.email
            console.log("User Signed In : " + donorEmail)
            
        }
        getDonor()
    });
}




