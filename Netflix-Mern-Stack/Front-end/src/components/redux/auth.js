export const header = {
    "Content-Type" :"application/json",
    
}

// TM DATA BASE:  Authentication Bearer Token

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMzYWU2YzA1ZjY2MGFiNTgwMmY5MDY5Y2M1NjBjZSIsInN1YiI6IjYyMWIxMjA3MWQ4MjBmMDA2MzIzMDc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YveKn310wAF7DNgIUG0cMcwWZP1FEQJ6-aVn2BkYjsw'
//     }
//   };

var acessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMzYWU2YzA1ZjY2MGFiNTgwMmY5MDY5Y2M1NjBjZSIsInN1YiI6IjYyMWIxMjA3MWQ4MjBmMDA2MzIzMDc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YveKn310wAF7DNgIUG0cMcwWZP1FEQJ6-aVn2BkYjsw';

export const tmDBheader = {
    "accept":"application/json",
    // "Content-Type" :"application/json",
    // "Access-Control-Allow-Origin": "*", 
    // "Content-Type": "application/json",
    "Authorization" : `Bearer ${acessToken}`
}


