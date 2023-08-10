fetch('data.json')
    .then((response) => {
        return response.json()
    }).then((data) => {
        const displayTarget = document.querySelector('.projects_html')
        
        let projectData = "<section class='container'>"

        
        console.log(data)
        
        data.projects.forEach((projects_html) => {
            
            projectData += "<div class='pro'>"
            projectData += "<p>" + projects_html.desc + "</p>"
            projectData += "<a class='button' href='#'>" + projects_html.anchor + "</a></div>"
            
            


            
            console.log(projects_html)
        })

        projectData += "</section>"
        
        
        displayTarget.innerHTML += projectData
    })


