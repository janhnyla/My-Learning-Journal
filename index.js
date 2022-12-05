import { blogs } from './blogData.js'
let media = ''


window.addEventListener('resize', resizeMedia)
document.addEventListener('click', function(e){
  if(e.target.dataset.btn === 'add'){
    addPosts()
  }else if(e.target.dataset.btn === 'remove'){
    removePosts()
  }
})

function resizeMedia(){
  if(window.matchMedia("(min-width: 992px)").matches){
      media = 6
  } else if(window.matchMedia("(min-width: 600px)").matches) {
    media = 4
  } else {
    media = 3
  }
  render()
  }

function addPosts(){
  if(media < blogs.length){
  if(window.matchMedia("(min-width: 992px)").matches){
    media += 3
  } else if(window.matchMedia("(min-width: 600px)").matches) {
  media += 4
} else {
  media += 3
}
render()
if(media >= blogs.length){
  document.getElementById('btn-small').setAttribute('data-btn', 'remove')
  document.getElementById('btn-small').innerText = 'View Less'
}
}
}

function removePosts(){

  if(window.matchMedia("(min-width: 992px)").matches){
    media = 6
  } else if(window.matchMedia("(min-width: 600px)").matches) {
  media = 4
} else {
  media = 3
}
render()
document.getElementById('btn-small').setAttribute('data-btn', 'add')
document.getElementById('btn-small').innerText = 'View More'

}


  function getBlogHtml(){
    let blogPost = ''
    for(let i = 0; i < media; i++){
      if(i === blogs.length) { break; }
      blogPost += `
      <div>
      <a href="${blogs[i].url}"><img class="blog-img" src="images/${blogs[i].image}" alt="${blogs[i].alt}"></a>
      <span class="date">${blogs[i].date}</span> 
      <h3>${blogs[i].heading}</h3>
      <p>${blogs[i].text}</p>
      </div>`
    }
      return blogPost
  }

function render(){
 document.getElementById('article').innerHTML = getBlogHtml()
}

render()
resizeMedia()
