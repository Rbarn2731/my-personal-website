const h2 = document.createElement("h2");
h2.textContent = "Salem Massachusetts";
document.querySelector("body").appendChild(h2);
    const div = document.createElement('div')
    const video = document.createElement('video')
    video.src = "./Salem_vids_pics/salem ghost tour.mp4"
    video.controls = true 
    div.appendChild(video)
    document.querySelector("body").appendChild(div);
    const image1 = document.createElement('img')
    image1.src = './Salem_vids_pics/witch museum.jpeg'
    image1.id = 'image1'
    div.appendChild(image1)
    const image2 = document.createElement('img')
    image2.src = './Salem_vids_pics/thumbnail.jpg'
    image2.id = 'image2'
    div.appendChild(image2)
    const image3 = document.createElement('img')
    image3.src = './Salem_vids_pics/salem pic3.jpeg'
    image3.id = 'image3'
    div.appendChild(image3)
    const image4 = document.createElement('img')
    image4.src = './Salem_vids_pics/me and gab salem.jpg'
    image4.id = 'image4'
    div.appendChild(image4)
    var button = document.createElement("button");
    button.innerHTML = "Do Something";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.addEventListener ("click", function() {
    alert("did something");
    });

