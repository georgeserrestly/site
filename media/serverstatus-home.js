// Handling errors
function handleErrors(response) {
    if (!response.ok) {
        document.getElementById("serverStatus").innerHTML = "";
        document.getElementById("serverStatusM").innerHTML = "";
        document.getElementById("serverLogoName").classList.remove("hidden");
    }
    return response;
}

// Fetch API, mcsrvstat
fetch("https://api.mcsrvstat.us/2/play.avenger.ro")
    .then(handleErrors)
    .then(response => {
        return response.json();
    })
.then(data => {
    if (data.online == true) {
        document.getElementById("serverVer").innerHTML = `Relax, join Tropical SMP, earn money playing and stay with us!`;

        // siteNav dependent
        
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-green-600">&#11044;</span>&emsp;Tropical SMP is online!&ensp;&middot;&ensp;${data.players.online} s\is playing right now</p>`;
        document.getElementById("serverStatusM").innerHTML = `<p class="font-bold select-none"><span class="text-green-600">&#11044;</span>&emsp;Online, ${data.players.online} is playing right now</p>`;
        
    }
    else {
        document.getElementById("serverPlaynow").innerHTML = `<span class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-thin uppercase text-gray-900 mr-2 shadow-lg">Indisponibil</span>`;
        document.getElementById("serverIP").classList.remove("bg-green-900");
        document.getElementById("serverIP").classList.add("bg-orange-800");

        // siteNav dependent
        
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-red-600">&#11044;</span>&emsp;Offline</p>`;
        document.getElementById("serverStatusM").innerHTML = `<p class="font-bold select-none"><span class="text-red-600">&#11044;</span>&emsp;Offline</p>`;
        
    }
});
