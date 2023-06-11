
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCYR_CIe37327vA2AXmRF8Jg&part=snippet%2Cid&order=date&maxResults=4';


const content = null || document.getElementById('youtubeContent');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e72835ef2bmsh6a8a5a2008f29f9p1c59aejsn0cdce08d0cce',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){

 const response = await fetch(urlApi, options);
 const data = await response.json();
 return data;
   }
(

async (urlApi, options) => {

try {
	
	 const videos = await fetchData(API);

	 let view = `
	 
	 ${videos.items.map((video) => 
				`
		<div class="group relative">
		<div
		  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
		  <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
		</div>
		<div class="mt-4 flex justify-between">
		  <h3 class="text-sm text-gray-700">
			<span aria-hidden="true" class="absolute inset-0"></span>
			${video.snippet.title}
		  </h3>
		</div>
	  </div>
		`
		).join('')}
	 `;

	 content.innerHTML = view;
	
} catch (error) {
	console.log(error);
     }
  }
)();
