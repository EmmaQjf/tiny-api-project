async function fetchdata(){
    try{
        const response = await fetch("https://api.publicapis.org/entries")

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }

        const data = await response.json();
        console.log(data)
        console.log("Number of public APIs:", data.count);
        console.log("First API:", data.entries[0]);

    }catch(error){
        console.log("Something went wrong:", error.message)
    }
}

fetchdata();