function add(event){
    event.preventDefault(); 
    let img = document.getElementById('input_image').value;
    let title = document.getElementById('input_title').value;
    let author = document.getElementById('input_author').value;
    console.log(img, title, author);

    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    let isExisting = userData.some();
                     
    if (!isExisting){
        userData.push({title, author});
        localStorage.setItem('userData', JSON.stringify(userData))

        alert("Add Successfully")
    } else {
        alert('You have already add!')
    }
}