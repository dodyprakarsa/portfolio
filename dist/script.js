console.log('script.js loaded')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href='./dist/style/default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href='./dist/style/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href='./dist/style/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href='./dist/style/purple.css'
	}

	localStorage.setItem('theme', mode)
}
