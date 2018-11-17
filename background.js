console.log("background working");

chrome.browserAction.onClicked.addListener((tab)=>{
	console.log(tab.id);
	let msg={
		txt:"hello"
	}
	chrome.tabs.sendMessage(tab.id,msg);
});