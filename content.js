console.log("its working");
chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
	if(message.txt)
	{
		let para=document.getElementsByTagName("p");
		for(ele of para)
		{
			ele.style["background-color"]="red";
		}	
	}
	else
	{
		console.log("click on the icon");
	}
});