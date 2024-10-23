document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
  
    const myHeaders = new Headers();
    myHeaders.append("student_number", "s4778459");  
    myHeaders.append("uqcloud_zone_id", "2dc2a6c5"); 
  
    const form = document.getElementById('postForm');
    const formData = new FormData(form);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow"
    };
  
    fetch("https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchat/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result); 
        alert('Post submitted successfully!');
      })
      .catch(error => console.error('Error:', error));
  });