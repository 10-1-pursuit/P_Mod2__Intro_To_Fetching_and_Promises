
// boolean true / false 
let stateOfSamOrGaryH2 = true

const imgForInstructor = document.querySelector("#instructor-image")

const h2ForInstructorName = document.querySelector("#instructor-name")
    h2ForInstructorName.addEventListener("click", ()=>{
        // handle this toggle

            // stateOfSamOrGaryH2 = false
            // stateOfSamOrGaryH2 = true

        // stateOfSamOrGaryH2 = !true  
        // stateOfSamOrGaryH2 = !false  
        stateOfSamOrGaryH2 = !stateOfSamOrGaryH2  
        // the opposite of whatever it was before

        console.log("stateOfSamOrGaryH2:", stateOfSamOrGaryH2)

        
        // Conditional Rendering

            // if(stateOfSamOrGaryH2 === true){
            //     h2ForInstructorName.innerText = "Sam"
            // } else {
            //     h2ForInstructorName.innerText = "Gary"
            // }

            // if(stateOfSamOrGaryH2){
            //     h2ForInstructorName.innerText = "Sam"
            // } else {
            //     h2ForInstructorName.innerText = "Gary"
            // }


            // Ternary Synatx
            // condition ? true : false 

            // stateOfSamOrGaryH2 ? h2ForInstructorName.innerText = "Sam" : h2ForInstructorName.innerText = "Gary"

            stateOfSamOrGaryH2 ? 
                (
                    h2ForInstructorName.innerText = "Sam",
                    imgForInstructor.src = "https://ca.slack-edge.com/TCVA3PF24-U04QV0UA1PY-cb148d3f560e-512"
                )
                : 
                (
                    h2ForInstructorName.innerText = "Gary",
                    imgForInstructor.src = "https://ca.slack-edge.com/TCVA3PF24-U03BU4X0881-e9f8b5bdffc2-512"
                )


                // https://ca.slack-edge.com/TCVA3PF24-U03BU4X0881-e9f8b5bdffc2-512


                // <img src="">   img { src: "" }
        


    })












// A  Sync  chronos


// const h1AtTopOfPage = document.querySelector("h1")
//     console.log("h1AtTopOfPage: ", h1AtTopOfPage)


// setTimeout(() => {
//     console.log("I should happen first");
//   }, 1000); // 1000 = 1sec
  
//   setTimeout(() => {
//     console.log("I should happen second");
//   }, 5000); // 5000 = 5sec
  
//   setTimeout(() => {
//     console.log("I should happen third");
//   }, 10000); // 10,000 = 10sec
  
//   console.log("I should happen last");



//   const birthday = new Date("December 17, 1995 03:24:00");
//     console.log(birthday)


// const promiseToWait = new Promise()
// const promiseToWait = new Promise( () => {} )
// const promiseToWait = new Promise(() => {

//   });

const promiseToWait = new Promise((resolve, reject) => {

    setTimeout( ()=>{

        if (true) {
            resolve("I promise to wait");  // true
        } 
        {
            reject("Something went wrong");
        }
          
    } )

});

// console.log(promiseToWait)


promiseToWait.then( (response) => {
    // console.log("Best Case/ resolve: " , response);
} )
// promiseToWait.then( () => {} 





const promiseToWaitBAD = new Promise((resolve, reject) => {

    setTimeout( ()=>{

        if (false) {
            resolve("I promise to wait");
        } 
        {
            // reject("ERROR: Something went wrong");  // false 
        }
          
    } )

});

// console.log(promiseToWaitBAD)


promiseToWaitBAD.then( (response) => {
    // console.log("WORST Case/ reject: " , response);
} )




// fetch( "" )
// fetch( "https://randomuser.me/api" );
// fetch( "https://randomuser.me/api" ).then( (response)=>{ console.log(response) } )

// fetch( "https://randomuser.me/api" )
// .then( (response)=>{ console.log(response) } )

// fetch( "https://randomuser.me/api" )
//     .then( (response)=>{ console.log(response) } )


// const resultOfFetch = fetch( "https://randomuser.me/api" );
//     console.log("resultOfFetch: " , resultOfFetch)



// fetch( "https://randomuser.me/api" )
    // .then( (response)=> response.json() )
//     .then( (JSONresponse)=> console.log(JSONresponse) )


// fetch( "https://randomuser.me/api" )
//     .then( (response)=>{ return response.json() } )
//     .then( (JSONresponse)=>{ console.log(JSONresponse) } )



    // .then( (response)=>{ response.json() } )









fetch( "https://randomuser.me/api" )
    .then( (response)=> response.json() )
    .then( (JSONresponse)=>{ 
        console.log(JSONresponse.results[0])

        const randomUser = JSONresponse.results[0]


        // const h1AtTopOfPage = document.querySelector("h1")
            // h1AtTopOfPage.innerText = randomUser.name.first

            // h1AtTopOfPage.innerText = JSONresponse.results[0].name.first

    } )
    // .then( (JSONresponse)=> console.log(JSONresponse.results[0]) )
    // .then( (JSONresponse)=> console.log(JSONresponse.results) )


    // console.log("OUTSIDE OF THE FETCH: ", JSONresponse.results[0])





function displayCard({ results }) {

    const [person] = results;
    const { title, first, last } = person.name;

    const fullName = `${title} ${first} ${last}`;
  
    const section = document.createElement("section");
    section.classList.add("card");
    //
    const img = document.createElement("img");
    img.setAttribute("src", person.picture.large);
    img.setAttribute("alt", fullName);
  
    const h2 = document.createElement("h2");
    h2.textContent = fullName;
  
    const paragraph = document.createElement("p");
    paragraph.textContent = person.email;
  
    section.append(img, h2, paragraph);
    document.querySelector("div").append(section);
    // document.querySelector(".people").append(section);
  }


  function displayError(error) {
    const section = document.querySelector("div");
    // const section = document.querySelector("section.error");
    section.style.display = "block";
  
    const paragraph = document.createElement("p");
    paragraph.textContent = "Something went wrong!";
  
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = error;
  
    section.append(paragraph, errorMessage);
  }




  //   fetch("https://randomuser.me/")  // see error display
  fetch("https://randomuser.me/api") // see actual random user
  .then((response) => response.json())
  .then((JSONresponse) => displayCard(JSONresponse))
  .catch(displayError);
//   .catch( (err) => displayError(err) );











// Application Program Interface

fetch("https://pokeapi.co/api/v2/pokemon/mudkip/")
    .then( response => response.json() )
    .then( (JSONresponse) => {
        console.log(JSONresponse)
        const fetchedPokemon = JSONresponse

        // do something
        //// Change the DOM


    } )
    .catch( (err) =>{
        console.log(err)
    } )






































































































