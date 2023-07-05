


fetch("/photos",{method:"GET"})
.then(data => data.json())
.then(jsonData => console.log(jsonData))



fetch("/photos/2",{method:"GET"})
.then(data => data.json())
.then(jsonData => console.log(new Date(jsonData.timestamp)))